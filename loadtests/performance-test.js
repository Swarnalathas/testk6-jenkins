import { sleep,check } from"k6";
import http from "k6/http";

export let options = {
  duration: "1m",
  vus: 5,
  thresholds: {
    http_req_duration: ["p(95)<500"]
  }
};



export default function() {
  let res = http.get("https://g5ddyd3i08.execute-api.us-east-1.amazonaws.com/dev/hello");
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200
  });
  sleep(3);
}

