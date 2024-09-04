function robotSim(commands: number[], obstacles: number[][]): number {
    let currPosition = [0, 0];
    let currReference = 0;
    let furthestDistance = 0;

    const obstacleMap = new Map<number,Set<number>>();
    obstacles.forEach(obstacle => {
        const mappedXAxis = obstacleMap.get(obstacle[0]);
        if(mappedXAxis) {
            mappedXAxis.add(obstacle[1]);
        } else {
            obstacleMap.set(obstacle[0], new Set([obstacle[1]]));
        }
    })

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        if (command < 0) {
            switch (currReference) {
                case 0:
                    currReference = command === -1 ? 3 : 2;
                    break;
                case 1:
                    currReference = command === -1 ? 2 : 3;
                    break;
                case 2:
                    currReference = command === -1 ? 0 : 1;
                    break;
                case 3:
                    currReference = command === -1 ? 1 : 0;
                    break;
            }
        } else {
            const nextPosition = [...currPosition];
            let validPosition = true;
            for (let j = 0; j < command && validPosition; j++) {
                switch (currReference) {
                    case 0:
                        nextPosition[1]++;
                        break;
                    case 1:
                        nextPosition[1]--;
                        break;
                    case 2:
                        nextPosition[0]--;
                        break;
                    case 3:
                        nextPosition[0]++;
                        break;
                }
                if (obstacleMap.get(nextPosition[0])?.has(nextPosition[1])) {
                    validPosition = false;
                } else {
                    currPosition = [...nextPosition];
                }
            }
        }
        const currDistance = Math.pow(currPosition[0], 2) + Math.pow(currPosition[1], 2);
        furthestDistance = currDistance > furthestDistance ? currDistance : furthestDistance;
    }
    return furthestDistance;
};
