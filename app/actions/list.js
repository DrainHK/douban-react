import request from '../libs/request';

export const RQESTDATA = 'RQESTDATA';
export const GET_MORELIST = 'GET_MORELIST';



let list = {
    // getState获取初始状态
    getMoreList: (options)=>((dispatch, getState)=>{
        let pageNo = options.pageNo || 1;
        let count = options.count || 10;
        let start = (pageNo - 1) * count;
        if(!getState().isFetching){
            dispatch(list.requestData(pageNo));
            request.get(options.url, {start: start, count: count}).then((res)=>{
                console.log('request')
                dispatch(list.hasGetMoreList(res))
            })
        }
    }),
    requestData:(pageNo)=>({
        type: RQESTDATA,
        pageNo: pageNo,
        isFetching: true
    }),
    hasGetMoreList:(data)=> ({
        type: GET_MORELIST,
        moreList:data.subjects,
        start:data.start,
        totalPage:(''+(data.total/data.count)).indexOf('.')==-1?(data.total/data.count): parseInt(data.total/data.count)+1
    })
}

export default list;
