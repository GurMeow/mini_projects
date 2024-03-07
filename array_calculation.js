function equation_sum(equation)
{
    let copy_eq = equation;

    let search_for = "stage 1";

    while (true)
    {
        for (let i = 0; i < equation.length; i++)
        {
            if (search_for === "stage 1" && equation[i] == "+")
            {
                copy_eq[i] = copy_eq[i-1] + copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true];
            }
            if (search_for === "stage 1" && equation[i] == "-")
            {
                copy_eq[i] = copy_eq[i-1] - copy_eq[i+1];
                copy_eq = copy_eq.slice(0, i+1).concat(copy_eq.slice(i+2));
                copy_eq = copy_eq.slice(0, i-1).concat(copy_eq.slice(i));
                return [copy_eq, true];
            }
        }

        return [copy_eq, false];
    }
}

let equation = [4, "-", 2, "+", 56, "+", 2];

while (true)
{
    result = equation_sum(equation);
    if (result[1] === true)
    {
        equation = result[0];
    }
    else
    {
        break;
    }
}

equation = Number(equation);

console.log(equation);