import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const paidByFriend = bill ? bill - paidByUser : "";
    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paidByUser) {
            return;
        }
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split A bill With {selectedFriend.name}</h2>

        <label htmlFor="">💵Bill Value</label>
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

        <label htmlFor="">Your expenses</label>
        <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

        <label htmlFor="">{selectedFriend.name}'s Expenses</label>
        <input type="text" name="" id="" value={paidByFriend} />

        <label htmlFor="">Who's paying the 💵Bill</label>
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className="button">Split Bill</button>

    </form>
}
export default FormSplitBill;