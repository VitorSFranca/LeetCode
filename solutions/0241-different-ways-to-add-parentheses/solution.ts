// ESSA MERDA FOI DIFICIL! CAGUEI PRO CODIGO BONITO! VINICIUS EH PIKA!
// A GENTE RESOLVEU JUNTO EU DO FUTURO! SO PRA CONSTAR!
function diffWaysToCompute(expression: string): number[] {
    if(!isNaN(Number(expression))) {
        return [Number(expression)];
    }

    const parts = expression.split('');

    const n = [];

    for (let i = 0; i < parts.length; i++) {
        let N = '';

        if (!isNaN(Number(parts[i]))) {
            while (!isNaN(Number(parts[i]))) {
                N = N + parts[i];
                i++;
            }
            i--;
        } else {
            N = parts[i];
        }

        n.push(N);

    }

    n.push('$');

    const tokens = [];

    for (let i = 0; i < n.length; i += 2) {
        tokens.push([n[i], n[i + 1]])
    }
    const res = [];

    const merger = (op: string, a: number, b: number) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            default: return 0;
        }
    }

    const sol = (nums: Array<Array<any>>): Array<any> => {
        if (nums.length === 1) {
            return [nums[0][0]];
        }

        const res = [];

        for (let i = 1; i < nums.length; i++) {
            const firstPart = nums.slice(0, i);
            const first = sol([...firstPart]);

            const secPart = nums.slice(i, nums.length);
            const sec = sol([...secPart]);

            const op = firstPart[firstPart.length - 1][1];

            for (let j = 0; j < first.length; j++) {
                const rFirst = first[j];
                for (let k = 0; k < sec.length; k++) {
                    res.push(merger(op, Number(rFirst), Number(sec[k])));
                }
            }

        }

        return res;
    }
    return sol(tokens);
};
