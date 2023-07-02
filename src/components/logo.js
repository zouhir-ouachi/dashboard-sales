import { useTheme } from "@mui/material/styles";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      viewBox="0 0 375 375"
      height="50"
      version="1.0"
    >
      <defs>
        <clipPath id="a">
          <path d="M9 0h360v374H9zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path
            d="M215.398 253.027c23.356 0 33.739 19.465 49.309 35.036 7.785 7.785 22.059 7.785 29.844 0l37.629-37.63c7.785-7.785 7.785-22.058 0-29.843l-37.63-37.633c-14.273-14.273-31.14-23.355-19.464-32.437 5.191-3.895 9.082-6.489 18.168-6.489 14.273 0 19.46 11.68 29.844 20.762 5.191 5.191 12.976 5.191 18.164 0l23.36-23.356c5.187-5.19 5.187-12.976 0-18.167l-23.36-23.356c-5.188-5.191-12.973-5.191-18.164 0-9.082 9.082-16.871 22.059-29.844 22.059-12.977 0-20.762-12.977-29.844-22.059-5.191-5.191-12.976-5.191-18.168 0l-23.355 23.356c-5.192 5.19-5.192 12.976 0 18.168 19.46 19.46 51.902 31.14 36.332 49.304-11.68 14.274-24.656 29.848-42.82 29.848-22.06 0-35.036-22.059-50.606-37.633-7.785-7.785-22.059-7.785-29.844 0L97.316 220.59c-7.785 7.785-7.785 22.058 0 29.844l31.145 31.14 6.488 6.488c7.785 7.786 22.059 7.786 29.844 0 16.867-16.867 25.95-35.035 50.605-35.035zm-38.93-146.625 72.669 72.664c-9.086 11.676-22.063 25.95-33.739 25.95-15.57 0-31.14-23.356-41.523-33.735-12.977-12.976-35.035-12.976-49.309 0l-37.629 37.63c-12.976 12.976-12.976 35.034 0 49.308l37.63 37.629c12.976 12.976 35.035 12.976 49.308 0 11.68-11.68 23.355-31.141 41.523-31.141 14.274 0 24.653 12.977 33.739 24.652l-72.668 72.664c-15.57 15.57-40.223 15.57-55.793 0L20.762 262.11c-15.57-15.57-15.57-40.222 0-55.793l99.914-99.914c15.57-15.57 40.222-15.57 55.793 0zm132.356-76.558 14.274 14.273c3.89 3.895 10.379 3.895 14.273 0l14.274-14.273c3.89-3.89 3.89-10.38 0-14.274L337.37 1.297c-3.894-3.89-10.383-3.89-14.273 0L308.824 15.57c-3.894 3.895-3.894 10.383 0 14.274zm0 0"
            clip-rule="evenodd"
          />
        </clipPath>
        <linearGradient
          x1=".115"
          gradientTransform="matrix(129.7578 0 0 129.7578 7.785 0)"
          y1="3.025"
          x2="2.965"
          gradientUnits="userSpaceOnUse"
          y2=".175"
          id="c"
        >
          <stop stop-color="#00649A" offset="0" />
          <stop stop-color="#00649A" offset=".125" />
          <stop stop-color="#00649A" offset=".156" />
          <stop stop-color="#00649A" offset=".172" />
          <stop stop-color="#00659B" offset=".176" />
          <stop stop-color="#00669C" offset=".18" />
          <stop stop-color="#00679C" offset=".184" />
          <stop stop-color="#00689D" offset=".188" />
          <stop stop-color="#00699D" offset=".191" />
          <stop stop-color="#006A9E" offset=".195" />
          <stop stop-color="#006B9F" offset=".199" />
          <stop stop-color="#006C9F" offset=".203" />
          <stop stop-color="#006DA0" offset=".207" />
          <stop stop-color="#006EA0" offset=".211" />
          <stop stop-color="#006FA1" offset=".215" />
          <stop stop-color="#0070A2" offset=".219" />
          <stop stop-color="#0071A2" offset=".223" />
          <stop stop-color="#0072A3" offset=".227" />
          <stop stop-color="#0073A4" offset=".23" />
          <stop stop-color="#0074A4" offset=".234" />
          <stop stop-color="#0074A5" offset=".238" />
          <stop stop-color="#0075A5" offset=".242" />
          <stop stop-color="#0076A6" offset=".246" />
          <stop stop-color="#0077A7" offset=".25" />
          <stop stop-color="#0078A7" offset=".254" />
          <stop stop-color="#0079A8" offset=".258" />
          <stop stop-color="#007AA8" offset=".262" />
          <stop stop-color="#007BA9" offset=".266" />
          <stop stop-color="#007CAA" offset=".27" />
          <stop stop-color="#007DAA" offset=".273" />
          <stop stop-color="#007EAB" offset=".277" />
          <stop stop-color="#007FAC" offset=".281" />
          <stop stop-color="#0080AC" offset=".285" />
          <stop stop-color="#0081AD" offset=".289" />
          <stop stop-color="#0082AD" offset=".293" />
          <stop stop-color="#0083AE" offset=".297" />
          <stop stop-color="#0084AF" offset=".301" />
          <stop stop-color="#0085AF" offset=".305" />
          <stop stop-color="#0086B0" offset=".309" />
          <stop stop-color="#0087B1" offset=".313" />
          <stop stop-color="#0087B1" offset=".316" />
          <stop stop-color="#0088B2" offset=".32" />
          <stop stop-color="#0089B2" offset=".324" />
          <stop stop-color="#008AB3" offset=".328" />
          <stop stop-color="#008BB4" offset=".332" />
          <stop stop-color="#008CB4" offset=".336" />
          <stop stop-color="#008DB5" offset=".34" />
          <stop stop-color="#008EB5" offset=".344" />
          <stop stop-color="#008FB6" offset=".348" />
          <stop stop-color="#0090B7" offset=".352" />
          <stop stop-color="#0091B7" offset=".355" />
          <stop stop-color="#0092B8" offset=".359" />
          <stop stop-color="#0093B9" offset=".363" />
          <stop stop-color="#0094B9" offset=".367" />
          <stop stop-color="#0095BA" offset=".371" />
          <stop stop-color="#0096BA" offset=".375" />
          <stop stop-color="#0097BB" offset=".379" />
          <stop stop-color="#0098BC" offset=".383" />
          <stop stop-color="#0099BC" offset=".387" />
          <stop stop-color="#0099BD" offset=".391" />
          <stop stop-color="#009ABD" offset=".395" />
          <stop stop-color="#009BBE" offset=".398" />
          <stop stop-color="#009CBF" offset=".402" />
          <stop stop-color="#009DBF" offset=".406" />
          <stop stop-color="#009EC0" offset=".41" />
          <stop stop-color="#009FC1" offset=".414" />
          <stop stop-color="#00A0C1" offset=".418" />
          <stop stop-color="#00A1C2" offset=".422" />
          <stop stop-color="#00A2C2" offset=".426" />
          <stop stop-color="#00A3C3" offset=".43" />
          <stop stop-color="#00A4C4" offset=".434" />
          <stop stop-color="#00A5C4" offset=".438" />
          <stop stop-color="#00A6C5" offset=".441" />
          <stop stop-color="#00A7C6" offset=".445" />
          <stop stop-color="#00A8C6" offset=".449" />
          <stop stop-color="#00A9C7" offset=".453" />
          <stop stop-color="#00AAC7" offset=".457" />
          <stop stop-color="#00ABC8" offset=".461" />
          <stop stop-color="#00ABC9" offset=".465" />
          <stop stop-color="#00ACC9" offset=".469" />
          <stop stop-color="#00ADCA" offset=".473" />
          <stop stop-color="#00AECA" offset=".477" />
          <stop stop-color="#00AFCB" offset=".48" />
          <stop stop-color="#00B0CC" offset=".484" />
          <stop stop-color="#00B1CC" offset=".488" />
          <stop stop-color="#00B2CD" offset=".492" />
          <stop stop-color="#00B3CE" offset=".496" />
          <stop stop-color="#00B4CE" offset=".5" />
          <stop stop-color="#00B5CF" offset=".504" />
          <stop stop-color="#00B6CF" offset=".508" />
          <stop stop-color="#00B7D0" offset=".512" />
          <stop stop-color="#00B8D1" offset=".516" />
          <stop stop-color="#00B9D1" offset=".52" />
          <stop stop-color="#00BAD2" offset=".523" />
          <stop stop-color="#00BBD2" offset=".527" />
          <stop stop-color="#00BCD3" offset=".531" />
          <stop stop-color="#00BDD4" offset=".535" />
          <stop stop-color="#00BED4" offset=".539" />
          <stop stop-color="#00BED5" offset=".543" />
          <stop stop-color="#00BFD6" offset=".547" />
          <stop stop-color="#00C0D6" offset=".551" />
          <stop stop-color="#00C1D7" offset=".555" />
          <stop stop-color="#00C2D7" offset=".559" />
          <stop stop-color="#00C3D8" offset=".563" />
          <stop stop-color="#00C4D9" offset=".566" />
          <stop stop-color="#00C5D9" offset=".57" />
          <stop stop-color="#00C6DA" offset=".574" />
          <stop stop-color="#00C7DB" offset=".578" />
          <stop stop-color="#00C8DB" offset=".582" />
          <stop stop-color="#00C9DC" offset=".586" />
          <stop stop-color="#00CADC" offset=".59" />
          <stop stop-color="#00CBDD" offset=".594" />
          <stop stop-color="#00CCDE" offset=".598" />
          <stop stop-color="#00CDDE" offset=".602" />
          <stop stop-color="#00CEDF" offset=".605" />
          <stop stop-color="#00CFDF" offset=".609" />
          <stop stop-color="#00D0E0" offset=".613" />
          <stop stop-color="#00D0E1" offset=".617" />
          <stop stop-color="#00D1E1" offset=".621" />
          <stop stop-color="#00D2E2" offset=".625" />
          <stop stop-color="#00D3E3" offset=".629" />
          <stop stop-color="#00D4E3" offset=".633" />
          <stop stop-color="#00D5E4" offset=".637" />
          <stop stop-color="#00D6E4" offset=".641" />
          <stop stop-color="#00D7E5" offset=".645" />
          <stop stop-color="#00D8E6" offset=".648" />
          <stop stop-color="#00D9E6" offset=".652" />
          <stop stop-color="#00DAE7" offset=".656" />
          <stop stop-color="#00DBE7" offset=".66" />
          <stop stop-color="#00DCE8" offset=".664" />
          <stop stop-color="#00DDE9" offset=".668" />
          <stop stop-color="#00DEE9" offset=".672" />
          <stop stop-color="#00DFEA" offset=".676" />
          <stop stop-color="#00E0EB" offset=".68" />
          <stop stop-color="#00E1EB" offset=".684" />
          <stop stop-color="#00E2EC" offset=".688" />
          <stop stop-color="#00E3EC" offset=".691" />
          <stop stop-color="#00E3ED" offset=".695" />
          <stop stop-color="#00E4EE" offset=".699" />
          <stop stop-color="#00E5EE" offset=".703" />
          <stop stop-color="#00E6EF" offset=".707" />
          <stop stop-color="#00E7F0" offset=".711" />
          <stop stop-color="#00E8F0" offset=".715" />
          <stop stop-color="#00E9F1" offset=".719" />
          <stop stop-color="#00EAF1" offset=".723" />
          <stop stop-color="#00EBF2" offset=".727" />
          <stop stop-color="#00ECF3" offset=".73" />
          <stop stop-color="#00EDF3" offset=".734" />
          <stop stop-color="#00EEF4" offset=".738" />
          <stop stop-color="#00EFF4" offset=".742" />
          <stop stop-color="#00F0F5" offset=".746" />
          <stop stop-color="#00F1F6" offset=".75" />
          <stop stop-color="#00F2F6" offset=".754" />
          <stop stop-color="#00F3F7" offset=".758" />
          <stop stop-color="#00F4F8" offset=".762" />
          <stop stop-color="#00F5F8" offset=".766" />
          <stop stop-color="#00F5F9" offset=".77" />
          <stop stop-color="#00F6F9" offset=".773" />
          <stop stop-color="#00F7FA" offset=".777" />
          <stop stop-color="#00F8FB" offset=".781" />
          <stop stop-color="#00F9FB" offset=".785" />
          <stop stop-color="#00FAFC" offset=".789" />
          <stop stop-color="#00FBFC" offset=".793" />
          <stop stop-color="#00FCFD" offset=".797" />
          <stop stop-color="#00FDFE" offset=".801" />
          <stop stop-color="#00FEFE" offset=".805" />
          <stop stop-color="#0FF" offset=".813" />
          <stop stop-color="#0FF" offset=".875" />
          <stop stop-color="#0FF" offset="1" />
        </linearGradient>
      </defs>
      <g clip-path="url(#a)">
        <g clip-path="url(#b)">
          <path fill="url(#c)" d="M5.191 0v375H369.81V0zm0 0" />
        </g>
      </g>
    </svg>
  );
};
