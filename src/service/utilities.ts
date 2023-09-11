import { Result, Ok, Err, match } from "oxide.ts";

interface BatchOptions {
    batchSize: number,
    delay: number
}

interface BatchResult<O> {
    success: O[],
    failures: Error[]
}

export const batchRequest = async <I, O>(records: I[], request: (record: I) => Promise<O>, options: BatchOptions): Promise<BatchResult<O>> => {
    let responses: Result<O, Error>[] = []

    // let result: BatchResult<I, O>[] = []

    for (let i = 0; i < records.length; i += options.batchSize) {
        const batch = records.slice(i, i + options.batchSize)
        const result = await Promise.all(
            batch.map(record => {
                return request(record)
                .then(res => Ok(res))
                .catch(e => Err(new Error(e)))
            })
        )

        responses = responses.concat(result)
        await delay(options.delay, Unit.MILISECONDS)
    }

    let success: O[] = []
    let errors: Error[] = []


    responses.forEach(res => {
        if (res.isOk()) {
            success.push(res.unwrap())
        } else {
            errors.push(res.unwrapErr())
        }
    })

    return {
        success,
        failures: errors
    }
}

enum Unit {
    MILISECONDS = 1,
    SECONDS = 1000
}

const delay = (duration: number, unit: Unit) => {
    return new Promise((resolve) => setTimeout(resolve, duration * unit));
};
