<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class thongTinController extends Controller
{
    public function getData(){
        $data = DB::table('thong_tin')->first();
        return response()->json($data);
    }
    public function getEmail(){
        $email = DB::table('thong_tin')->first()->value('email');
        return response()->json(['email' => $email]);
    }
    public function getById($id){
        $data = DB::table('thong_tin')->where('id', $id)->first();
        if ($data) {
            return response()->json($data);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }
        public function sendMail(Request $request){
        $validated = $request->validate([
            'email' => 'required|email',
            'message' => 'required|string',
        ]);
        
        $fixedEmail = 'nthanhvi.work@gmail.com'; 
        $senderEmail = $validated['email'];
        $messageContent = $validated['message']; 

        $body = "Người gửi: $senderEmail\n\nNội dung:\n$messageContent";

        try {
            Mail::raw($body, function ($mail) use ($fixedEmail, $senderEmail) {
                $mail->to($fixedEmail)
                    ->replyTo($senderEmail)
                    ->subject('Tin nhắn từ Portfolio');
            });
        } catch (\Exception $e) {
            Log::error('Mail sending failed: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send email. Please try again later.'], 500);
        }
        return response()->json(['message' => 'Email sent successfully']);
    }
}
