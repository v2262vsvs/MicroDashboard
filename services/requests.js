import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const onDelete = async (e,id,day) => {
    //e.preventDefault();
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      
      //body: JSON.stringify({}),
    });
  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    console.log('DELETE: ', data);
    return data
  };

  export const getUsers = async (e,day) => {
    e.preventDefault();
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=${day}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      //body: JSON.stringify({}),
    });

  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    //console.log('GET: ', data);
    return data
  };
  export const getUser = async (e,id,day) => {
    e.preventDefault();
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      //body: JSON.stringify({}),
    });

  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    //console.log('GET: ', data);
    return data
  };


  export const addUser = async (e,id,day, username,email,workspace,hours,minutes,session,team_id) => {
    e.preventDefault();
    console.log("id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession",id,day, username,email,workspace,hours,minutes,session,)
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=${day}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: day,
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(hours),
          morningminutes: parseInt(minutes),
          eveninghours: null,
          eveningminutes: null,
          morningsession: session,
          eveningsession: '',
          team_id: team_id,
      }),
    });

  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
   // notifySuccess()
    const data = await response.json();
    console.log('POST: ', data);
    return data
  };


  export const updateUser = async (e,id,day,username,email,workspace,hours,minutes,session,team_id) => {
    e.preventDefault();
    //console.log("id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession",id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession)
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?id=${id}&day=${day}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day:day,
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(hours),
          morningminutes: parseInt(minutes),
          eveninghours: null,
          eveningminutes: null,
          morningsession: session,
          eveningsession: '',
          team_id: team_id,
      }),
    });

  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    console.log('PUT: ', data);
    return data
  };


  export const fetchMicrosoft = async () => {
    const response = await fetch("https://www.fibofy.com/panda-sharedchannels/fetch-channel-users?channel=shared-brainly-2&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180", {
      "headers": {
        "accept": "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
        "if-none-match": "W/\"e03-7FkUdIv5POhB/p04qzfhaZDpREI\"",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "https://www.fibofy.com/panda/admin/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
    });
    if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    console.log('GET: ', data);
    return data
  }

  export const fetchBrainly = async () => {
    try{
    const response = await  fetch("https://www.fibofy.com/panda-sharedchannels/fetch-channel-users?channel=pandacoachbot&bypass=cc4d9d62ad12bb29cce8663cffdaf6e9026961cc81b8dfcf10d4683087403180", {
      "headers": {
        "accept": "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
        "if-none-match": "W/\"fe12-PCwt+X8cSysVRIWpDu1m+L4zfZE\"",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "connect.sid=s%3AOaHmk3BLmn_2hCQdgSKwgFwroQCj0OCI.3ni%2Bram%2BW3V5LpcfB4NQSllUPzlKMy6eZoaZpE3senU; mp_5e395adbffa8613b8525c450d4ccb06e_mixpanel=%7B%22distinct_id%22%3A%20%22181a1279c0994c-06b489e570f8d9-1d525635-13c680-181a1279c0a170%22%2C%22%24device_id%22%3A%20%22181a1279c0994c-06b489e570f8d9-1d525635-13c680-181a1279c0a170%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; AWSELB=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D; AWSELBCORS=43F19BD70A0EC6AEC3E24AA779BA6DDF4EA15902C7BF33B5004702A544C14D64B0C21F4E9F5CD3B18FE20A1BAF2A94A0D2BFEDAA74115F80D33D51B8CA39A2F39942AEA08D",
        "Referer": "https://www.fibofy.com/panda/admin/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });
    if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.text();
    console.log('GET: ', data);
    return data
  }catch(err){
    console.log(err)
  }
  }


  export const addUserWeekDays = async (e,id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession,team_id) => {
    e.preventDefault();
    //console.log("id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession",id,day, username,email,workspace,morninghours,morningminutes,eveninghours,eveningminutes,morningsession,eveningsession)
    const response = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=Monday`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: "Monday",
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(morninghours),
          morningminutes: parseInt(morningminutes),
          eveninghours: parseInt(eveninghours),
          eveningminutes: parseInt(eveningminutes),
          morningsession: morningsession,
          eveningsession: eveningsession,
          team_id: team_id,
      }),
    });

  if (!response.ok) {throw new Error(`Error: ${response.status}`);}
    const data = await response.json();
    console.log('POST: ', data);
    //return data

    const response2 = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=Tuesday`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: "Tuesday",
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(morninghours),
          morningminutes: parseInt(morningminutes),
          eveninghours: parseInt(eveninghours),
          eveningminutes: parseInt(eveningminutes),
          morningsession: morningsession,
          eveningsession: eveningsession,
          team_id: team_id,
      }),
    });

  if (!response2.ok) {throw new Error(`Error: ${response2.status}`);}
    const data2 = await response2.json();
    console.log('POST: ', data2);

    const response3 = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=Wednesday`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: "Wednesday",
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(morninghours),
          morningminutes: parseInt(morningminutes),
          eveninghours: parseInt(eveninghours),
          eveningminutes: parseInt(eveningminutes),
          morningsession: morningsession,
          eveningsession: eveningsession,
          team_id: team_id,
      }),
    });

  if (!response3.ok) {throw new Error(`Error: ${response3.status}`);}
    const data3 = await response3.json();
    console.log('POST: ', data3);

    const response4 = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=Thursday`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: "Thursday",
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(morninghours),
          morningminutes: parseInt(morningminutes),
          eveninghours: parseInt(eveninghours),
          eveningminutes: parseInt(eveningminutes),
          morningsession: morningsession,
          eveningsession: eveningsession,
          team_id: team_id,
      }),
    });

  if (!response4.ok) {throw new Error(`Error: ${response4.status}`);}
    const data4 = await response4.json();
    console.log('POST: ', data4);

    const response5 = await fetch(`https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2/?day=Friday`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          id: id,
          day: "Friday",
          username: username,
          email: email,
          workspace: workspace,
          morninghours: parseInt(morninghours),
          morningminutes: parseInt(morningminutes),
          eveninghours: parseInt(eveninghours),
          eveningminutes: parseInt(eveningminutes),
          morningsession: morningsession,
          eveningsession: eveningsession,
          team_id: team_id,
      }),
    });

  if (!response5.ok) {throw new Error(`Error: ${response5.status}`);}
    const data5 = await response5.json();
    console.log('POST: ', data5);
  };
  