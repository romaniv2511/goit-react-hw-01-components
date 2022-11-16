import PropTypes from "prop-types";
import css from "./transactionsHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionTable}>
            <thead>
                <tr>
                    <th className={css.transactionHeadItem}>Type</th>
                    <th className={css.transactionHeadItem}>Amount</th>
                    <th className={css.transactionHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={css.transactionBodyRow}>
                        <td className={css.transactionBodyItem}>{type}</td>
                        <td className={css.transactionBodyItem}>{amount}</td>
                        <td className={css.transactionBodyItem}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}