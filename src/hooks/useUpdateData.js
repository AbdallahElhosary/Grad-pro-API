import baseUrl from "../API1/baseUrl";

// function to insert data if it has image
export const useUpdateDataImage = async (url, params) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url, params, config);
    return res;
}

// function to insert data if it hasn't image
export const useUpdateData = async (url, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url, params, config);
    return res;
}