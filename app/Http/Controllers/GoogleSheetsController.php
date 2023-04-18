<?php

namespace App\Http\Controllers;

use Google_Client;
use Google_Service_Sheets;
use Illuminate\Http\Request;
use Google_Service_Sheets_ValueRange;
use PulkitJalan\Google\Facades\Google;
use Illuminate\Support\Facades\Storage;
use Revolution\Google\Sheets\Facades\Sheets;

class GoogleSheetsController extends Controller
{

  
    function index(Request $request)
    {
            // Set up the Google Sheets API client
        $client = new Google_Client();
        $client->setAuthConfig(storage_path('credentials.json'));
        // return public_path('credentials.json');
        $client->addScope(Google_Service_Sheets::SPREADSHEETS);
        $service = new Google_Service_Sheets($client);
        
        // Define the spreadsheet ID and range to update
        $spreadsheetId = '16TH2V1EvYCNgVH63YgPao7yyTxjUnL1sNU6aTnXMztg';
       // Define the spreadsheet ID and worksheet range
        $range = 'A2:A4';

        // Define the data to insert
        $values = [
            ['John Doe', 'ghhfg@example.com'],
            ['message', 'wa shriif ra baydiih l7maaar'],
        ];

        // Insert the data
        $body = new Google_Service_Sheets_ValueRange([
            'values' => $values
        ]);
        $params = [
            'valueInputOption' => 'RAW'
        ];
        
        // Update the spreadsheet with the order data
        $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
        
        return response()->json($result) ;
        
        // Return a response indicating whether the update was successful
        if ($result->getUpdates()->getUpdatedCells() > 0) {
            return response()->json(['message' => 'Order added to Google Sheet']);
        } else {
            return response()->json(['error' => 'Failed to add order to Google Sheet']);
        }
    }

    
}


