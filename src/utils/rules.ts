import moment, { Moment } from "moment";


export const rules = {
    require: (message: string) => ({
        require: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value.isSameOrAfter(moment())) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message));
        }
    })
}