import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";
import "./CreateSandwich.css";

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        const inputFeldName = event.target.name;
        const inputFeldValue = event.target.value;
        const inputFeldType = event.target.type;

        setSandwich((oldForm) => ({
            ...oldForm,
            [inputFeldName]:
                inputFeldType === "checkbox" ? event.target.checked
                    : inputFeldValue
        }))
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(sandwich)
        props.addSandwich(sandwich)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Chose a Burgername for your cration
                    <input
                        name="name"
                        type="text"
                        value={sandwich.name}
                        placeholder="BEAST BURGER"
                        onChange={handleChange}/>
                </label>
                <label>Beef or Veggie?
                    <input
                        name="patty"
                        type="text"
                        value={sandwich.patty}
                        placeholder="Beef or Veggie?"
                        onChange={handleChange}/>
                </label>
                <label>Chose ur amount of Patties?
                    <input
                        name="numberOfPatties"
                        type="text"
                        value={sandwich.numberOfPatties}
                        placeholder="187"
                        onChange={handleChange}/>
                </label>
                <label>Some extras?
                    <input
                        name="extraWishes"
                        type="text"
                        value={sandwich.extraWishes}
                        placeholder="Make a wish"
                        onChange={handleChange}/>
                </label>
                <label>Check for medium grilled Pattie
                    <input
                        name="grilled"
                        type="checkbox"
                        checked={sandwich.grilled}
                        onChange={handleChange}/>
                </label>
                <button>Bestellung hinzufügen</button>
            </form>

        </div>
    )
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}