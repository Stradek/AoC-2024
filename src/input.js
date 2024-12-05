function get_input_array()
{
    input_string_array = [];

    while(true)
    {
        let userInput = prompt("Please enter your input:");
    
        if(userInput != '')
        {
            input_string_array += userInput;
        }
        else
        {
            console.log("Breaking");
            break;
        }
    }

    return input_string_array
}

module.exports { get_input_array }