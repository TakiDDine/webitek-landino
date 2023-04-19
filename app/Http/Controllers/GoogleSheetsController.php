<?php

namespace App\Http\Controllers;

use Google_Client;
use Google_Service_Sheets;
use Illuminate\Http\Request;
use Google\Service\Exception;
use Google_Service_Sheets_ValueRange;
use Illuminate\Support\Facades\Validator;

class GoogleSheetsController extends Controller
{

  
    function index(Request $request)
    {
        // return $request->header('User-Agent');
        $validator = Validator::make($request->all(),[
            "*" => "required|string"
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 400);
        }
        try{

            // Set up the Google Sheets API client
            $client = new Google_Client();
            $client->setAuthConfig(storage_path('credentials.json'));
            // return public_path('credentials.json');
            $client->addScope(Google_Service_Sheets::SPREADSHEETS);
            $service = new Google_Service_Sheets($client);
            // Define the spreadsheet ID and worksheet range
            $range = '1:1';
            // Define the spreadsheet ID and range to update
            $spreadsheetId = $request->input('INTERFACE');
            // Get the values of the specified range
            $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    
            $check = $response->getValues();
    
            // Define the data to insert
            $row= [];
            $header = [];
            // add header and rows
            forEach($request->except('INTERFACE') as $key => $data) {
                array_push($row, $data);
    
                array_push($header, $key);
            }
    
            // add datetime 
            $date = date_create();
            // return date_format($date,"Y/m/d H:i:s");
            // in row
            array_push($row, date_format($date,"Y/m/d H:i:s"));
            
            
            $values = [$row];
            // check if the header is exist
            if(empty($check)) {
                // in header
                array_push($header, 'DATE');
                array_unshift($values, $header);
            }
    
            // Insert the data
            $body = new Google_Service_Sheets_ValueRange([
                'values' => $values
            ]);
            $params = [
                'valueInputOption' => 'RAW'
            ];
            
            // Update the spreadsheet with the order data
            $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
            
            // Return a response indicating whether the update was successful
            if ($result->getUpdates()->getUpdatedCells() > 0) {
                return response()->json(['message' => 'Order added to Google Sheet']);
            } else {
                return response()->json(['error' => 'Failed to add order to Google Sheet']);
            }
        } catch(Exception $e) {
            if($e) {
                $error =  json_decode($e->getMessage());
                if($error->{'error'}->{'code'} == 403)
                return response()->json(['error' => $error->{'error'}->{'message'}]);
            }
        }
    }

    
}


