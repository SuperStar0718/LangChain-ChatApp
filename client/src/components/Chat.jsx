import { useState } from "react";
import * as React from 'react';
import Navbar from "./Layout/Navbar/Navbar";
import CommandInput from "./Layout/CommandInput";
import SessionPanel from "./SessionManager/SessionPanel";
import Spinner from './Layout/Spinner';

export default function Chat() {

 
  const [response, setResponse] = useState("");
  const [uploading, setUploading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [ fileName, setFileName ] = useState("");

  const onLoadingTrue = () => setUploading(true);
  const onLoadingFalse = () => setUploading(false);

  const onAskingTrue = () => setAsking(true)
  const onAskingFalse = () => setAsking(false)



  const handleCommandSubmit = async (command) => {
    const apiUrl = "http://127.0.0.1:5000/first";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: command }),
    };
    onAskingTrue();

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    setResponse(data.response);
    setHasResponse(true);
    onAskingFalse();
  };
  


  return (
    
    <div className="w-full h-full">
      { uploading ? <Spinner /> : ""
      }   
      <div className="h-full grid content-between px-4" style={{ minHeight: "calc(100vh - 72px)" }}>
        <SessionPanel response={response} asking={asking} hasResponse={hasResponse} fileName={fileName} />
       
        <div className="relative w-full">
          <div className="w-full grid pb-4" style={{ placeContent: "center" }}>
            <CommandInput onCommandSubmit={handleCommandSubmit} />
            
          </div>

        </div>
      </div>
    </div>
  );
}