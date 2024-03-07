function equation_sum(equation, search_for)
{
    let copy_eq = equation;

    while (true)
    {
        for (let i = 0; i < equation.length; i++)
        {
            if (search_for === "stage 1" && equation[i] == "+")
            {
                copy_eq[i] = copy_eq[i-1] + copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true, search_for];
            }
            if (search_for === "stage 1" && equation[i] == "-")
            {
                copy_eq[i] = copy_eq[i-1] - copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true, search_for];
            }
            if (search_for === "stage 2" && equation[i] == "*")
            {
                copy_eq[i] = copy_eq[i-1] * copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true, search_for];
            }
            if (search_for === "stage 2" && equation[i] == "/")
            {
                copy_eq[i] = copy_eq[i-1] / copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true, search_for];
            }
            if (search_for === "power" && equation[i] == "^")
            {
                copy_eq[i] = copy_eq[i-1] ** copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true, search_for];
            }
        }

        if (search_for === "power")
        {
            return [copy_eq, false, "stage 2"];
        }
        if (search_for === "stage 2")
        {
            return [copy_eq, false, "stage 1"];
        }

        if (search_for === "stage 1")
        {
            return [copy_eq, false, "stop"];
        }
    }
}

let equation = [4, "^", 2, "+", 3, "*", 2];

search_for = "power";

while (true)
{
    result = equation_sum(equation, search_for);
    search_for = result[2];
    if (result[1] === true)
    {
        equation = result[0];
    }
    else if (search_for === "stop")
    {
        break;
    }
}

equation = Number(equation);

console.log(equation);
