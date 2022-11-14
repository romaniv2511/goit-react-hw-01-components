import "./transactionsHistory.css"

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transactionTable">
            <thead>
                <tr>
                <th className="transactionHeadItem">Type</th>
                <th className="transactionHeadItem">Amount</th>
                <th className="transactionHeadItem">Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                <tr key={id} className="TransactionBodyRow">
                    <td className="transactionBodyItem">{type}</td>
                    <td className="transactionBodyItem">{amount}</td>
                    <td className="transactionBodyItem">{currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}