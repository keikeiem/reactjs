import qs from "qs";

const URIQuery = function({ location }) {
    const query = qs.parse(location.search, {
        // URI쿼리의 첫 문자열 ?를 무시하는 옵션
        ignoreQueryPrefix: true
    });
    console.log(query);
    return (
        <div>
            ID: {query.id}
            <br/>
            Name: {query.name}
        </div>
    )
}

export default URIQuery;