const Parameter = function({ match }) {
    const params = match.params;
    console.log(params);
    return (
        <div>
            {params.id}
        </div>
    )
}

export default Parameter;