import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">12,000</td>
                        <td>Development</td>
                        <td>2021-02-20</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}