<script>
import router from "@/router";
import {useForm} from "vee-validate";

export default {
    name: "JoinUsView",
    data() {
        return {
            schema: {
                your_name: 'required|alpha_spaces',
                age: 'required|min_value:13',
                gender: 'required',
                target_name: 'required|alpha_spaces',
                description: 'required',
            }
        }
    },
    methods: {
        handle() {
            console.log('1')
            setTimeout(() => {
                router.push({path: "/tip"})
            }, 1000)
        },
        clear(){
            const { resetForm } = useForm();
            this.$refs.form.resetForm()
        }
    }
}

</script>

<template>
    <section  class="main">
        <h1>Złóż Donos</h1>
        <VeeForm ref="form" class="form" @submit="handle" :validation-schema="schema">
            <div class="input-wrap">
                <label>Jak się nazywasz?</label>
                <VeeField name="your_name" type="number" v-slot="{field, errors}">
                    <div class="border">
                        <input type="text" v-bind="field" placeholder="Twoje imię i nazwisko">
                    </div>
                    <div class="error-message" v-for="error in errors" :key="error">
                        {{error}}
                    </div>
                </VeeField>
            </div>
            <div class="input-wrap">
                <label>Ile masz lat?</label>
                <VeeField name="age" type="text" v-slot="{field, errors}">
                    <div class="border">
                        <input type="text" v-bind="field" placeholder="Twój wiek">
                    </div>
                    <div class="error-message" v-for="error in errors" :key="error">
                        {{error}}
                    </div>
                </VeeField>
            </div>
            <div class="input-wrap">
                <p>Jaka jest Twoja płeć?</p>
                <div class="radio-wrap">
                    <label><VeeField name="gender" value="M" type="radio"></VeeField>Mężczyzna</label>
                    <label><VeeField name="gender" value="K" type="radio"></VeeField>Kobieta</label>
                    <label><VeeField name="gender" value="I" type="radio"></VeeField>Inna</label>
                </div>
                <VeeErrorMessage class="error-message" name="gender"></VeeErrorMessage>
            </div>
            <div class="input-wrap">
                <label>Na kogo chcesz donieść?</label>
                <VeeField name="target_name" type="text" v-slot="{field, errors}">
                    <div class="border">
                        <input type="text" v-bind="field" placeholder="Imię i nazwisko osoby na, którą chcesz donieść">
                    </div>
                    <div class="error-message" v-for="error in errors" :key="error">
                        {{error}}
                    </div>
                </VeeField>
            </div>
            <div class="input-wrap">
                <label>Dlaczego chcesz donieść?</label>
                <VeeField name="description" type="text" v-slot="{field, errors}">
                    <div class="textarea-border">
                        <textarea v-bind="field" cols="30" rows="10" placeholder="Opis czynu bandyckiego."></textarea>
                    </div>
                    <div class="error-message" v-for="error in errors" :key="error">
                        {{error}}
                    </div>
                </VeeField>
            </div>
            <div class="button-wrap">
                <button type="submit">Wyślij</button>
                <button @click.prevent="clear">Wyczyść</button>
            </div>
        </VeeForm>
    </section>
</template>

<style scoped>

.form{
    width: 500px;
}

@media only screen and (max-width: 500px) {
    .form{
        width: 400px;
    }
}

@media only screen and (max-width: 400px) {
    .form{
        width: 350px;
    }

    .radio-wrap{
        flex-direction: column;
    }
}
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem 0;
}

.input-wrap{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label, p{
    font-size: 1rem;
    color: indigo;
    margin: 0 0 0 15px;
    font-weight: bolder;
}

.error-message{
    margin-left: 15px;
}

input[type="text"]{
    font-size: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 15px;
    background-color: indigo;
    color: #50b569;
    border: none;
    width: calc(100% - 4rem);
}

::placeholder{
    color: #50b569;
    opacity: 0.8;
}

.border{
    border: 2px solid indigo;
    padding: 4px;
    border-radius: 20px;
    width: calc(100% - 8px);
}

.error-message{
    color: red;
    background-color: indigo;
    width: calc(100% - 3rem);
    margin: 0 0.5rem 0 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 15px;
    //font-weight: bolder;
}

textarea{
    border-radius: 15px;
    width: calc(100% - 4rem - 2px);
    min-height: 100px;
    height: calc(100% + 4px);
    padding: 1rem 2rem 1rem 2rem;
    resize: vertical;
    background-color: indigo;
    color: #50b569;
    font-size: 1rem;
}

.textarea-border{
    border: 2px solid indigo;
    padding: 4px;
    border-radius: 20px;
}

.radio-wrap label{
    font-weight: normal;
    display: flex;
    align-items: center;
    margin: 0 0 0 2rem;
}

.radio-wrap label p{
    font-weight: normal;
}

.radio-wrap{
    display: flex;
}

input[type="radio"]{
    display: grid;
    place-content: center;
    appearance: none;
    background-color: transparent;
    margin: 0 1rem 0 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid indigo;
    border-radius: 50%;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em indigo;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

.button-wrap{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem 0 2rem 0;
}

button{
    font-size: 1.5rem;
    padding: 0.5rem 4rem 0.5rem 4rem;
    border-radius: 25px;
    border: 2px solid indigo;
    background-color: transparent;
    font-weight: bold;
    color: indigo;
    transition: ease-in 0.1s;

}

button:hover{
    background-color: indigo;
    color: #50b569;
}

h1{
    background-color: indigo;
    width: calc(100% - 8rem);
    text-align: center;
    margin: 0;
    padding: 4rem;
    font-size: 6rem;
    color: #50b569;
    margin-bottom: 2rem;
}

</style>