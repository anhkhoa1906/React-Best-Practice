import React, { useState } from "react";
const GreetingMessage = ({isAdmin}) => {
    return <h2>{isAdmin ? "Hello, Admin": "Hello, Customer"}</h2>;
    };
    export default GreetingMessage;