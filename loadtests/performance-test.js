import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "1m",
  vus: 5,
  thresholds: {
    http_req_duration: ["p(95)<500"]
  }
};



export default function() {
  http.get("https://g5ddyd3i08.execute-api.us-east-1.amazonaws.com/dev/hello");
  sleep(3);
}
