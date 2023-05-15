import {configure, defineRule, ErrorMessage, Field, Form} from "vee-validate";
import {alpha_spaces, min_value, required} from "@vee-validate/rules";

export default  {
    install(app) {
        app.component("VeeForm", Form)
        app.component("VeeField", Field)
        app.component("VeeErrorMessage", ErrorMessage)

        defineRule("required", required)
        defineRule("min_value", min_value)
        defineRule("alpha_spaces", alpha_spaces)

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `To pole jest wymagane.`,
                    min_value: `Podany wiek jest zbyt niski.`,
                    alpha_spaces: `Pole zawiera niedozwolone znaki.`,
                }

                const message = messages[ctx.rule.name]
                    ? messages[ctx.rule.name]
                    : `To pole jest niepoprawnie wypełnione`;
                return message;
            },

            //default behaviour
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        })
    }
}