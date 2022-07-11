import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    // const date = new Date(new Date().setDate(new Date().getDate() - 365));
    return (
        <DatePicker
            selected={ new Date() }
            onChange={ (date: Date) => { } }
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
        />
    );
}