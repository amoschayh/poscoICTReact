import Category from "./Category";
import Rows from "./Rows";

const Table = ({data, isCheck, filterText}) => {
    const rows = () =>{
        let lastCategory = "";
        let dataRow = [];
        data.forEach((row) => {
            if (row.name.indexOf(filterText) === -1){
                return;
            }
            if (isCheck && !row.stocked){
                return;
            }
            if (lastCategory !== row.category){
                dataRow.push(<Category category={row.category} key={row.category}></Category>);
            }

            dataRow.push(<Rows row={row} key={row.name}></Rows>);
            lastCategory = row.category;
        });

    };
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows()}</tbody>
        </table>
    );
};