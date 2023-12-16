const React = require("react");

function AddBasket() {
    return(
        <div className="addBasket input">
            <form id="addBasket" className="form">
                <div>
                    <input type="text" name="name" placeholder="Введите название" />
                </div>
                <button type="submit">добавить</button>
                <button type="button" className="cancel3">X</button>
                <div className="message3"></div>
            </form>
        </div>
    )
}

module.exports = AddBasket