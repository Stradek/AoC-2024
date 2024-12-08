// const input = require('../input');

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function solution(input_string_array)
{
    // input_string_array = input.get_input_array();
    const elements_count = input_string_array.length;
    let list1 = [];
    let list2 = [];

    for(let i = 0; i < elements_count; i++)
    {
        let two_numbers = input_string_array[i].split(/\s+/);

        list1.push(two_numbers[0]);
        list2.push(two_numbers[1]);
    }

    list1.sort((a,b) => a - b);
    list2.sort((a,b) => a - b);

    let total_distance = 0;
    for(let i = 0; i < elements_count; i++)
    {
        distance = Math.abs(list1[i] - list2[i])

        total_distance += distance;
    }

    return total_distance;
}

module.exports = { solution };