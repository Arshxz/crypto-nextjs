export function Row() {
    return (
        <div className="row">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
        </div>
    )
}

export default function Skeleton() {
    const numberOfRows = 10;

    const renderedRows = [...Array(numberOfRows)].map((e, i) => (
        <div key={i}>
            <Row />
        </div>

    ));
    return (
        <div className="w-11/12 overflow-x-auto rounded-sm mx-auto mb-5">
            {" "}
            {renderedRows}
        </div>
    )
}