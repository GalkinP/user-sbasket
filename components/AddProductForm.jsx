const React = require("react");

function AddProdForm({basket, user}) {
    return(
        <div className="AddProdForm input">
            <form id="addProdForm" className="form" data-id={basket.id}>
                <div>
                    <div><input type="text" name="name" placeholder="Введите название" /></div>
                    <div><input type="text" name="description" placeholder="Введите описание" /></div>
                    <div><input type="number" name="price" placeholder="Цена" /></div>
                    <div><input type="text" name="img" placeholder="Ссылка на изображение" /></div> 
                </div>
                <button type="submit">добавить</button>
                <button type="button" className="cancel5">X</button>
                <div className="message3"></div>
            </form>
        </div>
    )
}

module.exports = AddProdForm