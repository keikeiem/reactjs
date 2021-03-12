import qs from "qs";
import { Fragment } from "react";

const URIQuery = function({ location }) {
    const query = qs.parse(location.search, {
        // URI쿼리의 첫 문자열 ?를 무시하는 옵션
        ignoreQueryPrefix: true
    });
    return (
        <div>
            ID: {query.id}
            <br/>
            Name: {query.name}
        </div>
    );
    return (
        <Fragment>
            ID: {query.id}
            <br/>
            Name: {query.name}
        </Fragment>
    )
}

export default URIQuery;