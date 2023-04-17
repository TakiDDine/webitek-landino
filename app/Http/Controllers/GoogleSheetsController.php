<?php

namespace App\Http\Controllers;

use Google_Client;
use Google_Service_Sheets;
use Illuminate\Http\Request;
use Google_Service_Sheets_ValueRange;
use Illuminate\Support\Facades\Storage;
use Google\Client;
use Google\Service\Drive;
use Google\Service\Sheets\ValueRange;

class GoogleSheetsController extends Controller
{


    function updateValues()
    {

        // Set up the Google API client
    $client = new Google_Client();
    $client->setApplicationName("My App");
    $client->setScopes([Google_Service_Sheets::SPREADSHEETS]);
    $client->setAccessType('offline');
    return response()->json(Storage::disk('local')->get('credentials.json'));
    $client->setAuthConfig(Storage::disk('local')->get('credentials.json'));

    // Authenticate with the Google Sheets API
    $service = new Google_Service_Sheets($client);

    // Define the spreadsheet ID and worksheet range
    $spreadsheetId = 'your-spreadsheet-id';
    $range = 'Sheet1!A1:B2';

    // Define the data to insert
    $values = [
        ['John Doe', 'john@example.com'],
        ['Jane Doe', 'jane@example.com'],
    ];

    // Insert the data
    $body = new Google_Service_Sheets_ValueRange([
        'values' => $values
    ]);
    $params = [
        'valueInputOption' => 'RAW'
    ];
    $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

    // Print the result
    printf("%d cells updated.", $result->getUpdates()->getUpdatedCells());

}

}
