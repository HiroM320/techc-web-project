import React from "react";

// 型の定義
type RentalItemId = 1 | 2 | 3 | 4 | 5 | 6;

interface RentalItemProps {
  id: RentalItemId;
  name: string;
}

const RentalItemIcons: Record<RentalItemId, JSX.Element> = {
  1: (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ビーチチェアのアイコン"
    >
      <g clip-path="url(#clip0_15_215)">
        <path
          d="M19.1524 74.7173L11.6871 90.6317C10.743 92.639 11.6073 95.0269 13.6158 95.9694L14.8914 96.5687C16.8971 97.5083 19.291 96.6442 20.2291 94.6386L29.569 74.7325H19.5344C19.408 74.7325 19.2803 74.728 19.1524 74.7173Z"
          fill="#0077CA"
        />
        <path
          d="M85.1086 70.0127L84.3814 71.5654C83.4803 73.491 81.5209 74.7326 79.398 74.7326H76.8965L86.2363 94.6387C87.1744 96.6443 89.5684 97.5084 91.574 96.5688L92.8525 95.9695C94.8582 95.027 95.7225 92.6391 94.7781 90.6318L85.1086 70.0127Z"
          fill="#0077CA"
        />
        <path
          d="M98.4596 28.5867L94.7594 26.8521C93.4207 26.2236 91.8277 26.7998 91.201 28.1369L75.8211 60.9226C75.3805 61.8607 74.4361 62.4613 73.3978 62.4613H19.5371C18.0582 62.4613 16.8613 63.6597 16.8613 65.1371V69.2255C16.8613 70.7029 18.0582 71.8997 19.5371 71.8997H79.3965C80.4332 71.8997 81.3773 71.3005 81.818 70.3609L99.7461 32.1466C100.373 30.808 99.7967 29.2154 98.4596 28.5867Z"
          fill="#0077CA"
        />
        <path
          d="M40.7775 60.5729H45.6332L39.4111 34.9502L74.4244 26.4469L72.824 23.942C65.633 12.6844 53.0967 5.7123 39.5898 5.70918C36.8586 5.70918 34.092 5.99707 31.3223 6.58867L30.4025 3.05176L27.2047 3.88379L28.1242 7.41914C20.6438 9.68047 14.2693 14.0047 9.51387 19.6088C4.31191 25.7369 1.02441 33.3928 0.272656 41.5619L0 44.5227L34.8252 36.0641L40.7775 60.5729ZM67.5078 23.7557L54.001 27.0369L54.2797 26.9121C51.7195 21.1895 48.4629 16.4076 44.8475 13.0002C43.5936 11.8217 42.2951 10.8127 40.9623 9.98691C51.4545 10.3984 61.1981 15.5342 67.5078 23.7557ZM34.0103 10.4092C35.2873 10.5309 36.6029 10.9084 37.9432 11.5506C40.4201 12.7338 42.9559 14.8119 45.3174 17.6279C47.5988 20.3438 49.7139 23.7451 51.4977 27.6439L37.6752 31.0006L32.3943 10.7049C32.9336 10.5924 33.4727 10.4955 34.0103 10.4092ZM17.9246 35.7406L18.2297 35.7238L4.9123 38.9586C6.02148 32.8045 8.74961 27.0709 12.7533 22.357C15.3229 19.3285 18.4162 16.7234 21.9377 14.6887C21.0164 16.2477 20.2479 18.0021 19.6346 19.9217C18.4502 23.6326 17.8369 27.9551 17.8369 32.6381C17.8371 33.6547 17.8662 34.6916 17.9246 35.7406ZM20.733 35.115C20.693 34.2785 20.6684 33.4498 20.6684 32.6381C20.6652 26.7258 21.716 21.5006 23.5645 17.6447C24.4889 15.7146 25.6057 14.1311 26.8656 12.951C27.3262 12.5197 27.8053 12.1422 28.3014 11.8174C28.5971 11.7188 28.8959 11.6264 29.1963 11.5338L34.4631 31.7816L20.733 35.115Z"
          fill="#0077CA"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_215">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  2: (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="パラソルのアイコン"
    >
      <path
        d="M50.6098 54.1627C51.7898 53.2605 53.4533 52.3008 55.366 51.4311C58.8084 49.8504 63.0305 48.5008 66.7836 47.5734C68.66 47.1098 70.4246 46.7471 71.9076 46.507C73.3834 46.2635 74.6068 46.15 75.2563 46.1535H75.2744L76.6061 46.1859L77.5045 45.2027C80.633 41.7818 83.6895 39.909 85.923 38.8805C87.0381 38.3662 87.9475 38.0648 88.5502 37.8973C88.8533 37.8143 89.0771 37.7637 89.2143 37.7367C89.2791 37.7221 89.326 37.7148 89.3477 37.7096L93.5012 37.1268L91.5057 33.4244C88.3084 27.5027 82.885 21.2455 75.3828 16.3975C67.884 11.5549 58.2744 8.16465 46.9109 8.16816C45.6154 8.16816 44.291 8.22949 42.9488 8.31973L42.4615 5.1875L38.8459 5.75391L39.3367 8.87891C27.5223 11.8055 18.5947 17.8336 12.3375 24.8324C9.06445 28.4896 6.50977 32.4066 4.60078 36.2949C2.6957 40.1832 1.43613 44.0441 0.768555 47.6203L0 51.7559L4.1207 51.0449C4.13535 51.0432 4.6332 50.9674 5.51367 50.9674C7.69707 50.9709 12.1967 51.4148 17.6998 54.5596L18.8365 55.2072L20.0742 54.7959C20.5145 54.6498 21.2037 54.4729 22.0482 54.3088C24.5994 53.8072 28.558 53.4047 32.8018 53.4084C37.085 53.4029 41.7004 53.8197 45.5326 54.8318L50.9887 89.6922H7.60684V94.8125H99.7869V89.6922H56.1705L50.6098 54.1627ZM29.691 21.7615C25.3285 28.0854 22.2898 34.9543 20.3125 40.5512C19.3201 43.3514 18.5984 45.8324 18.1113 47.7773C18.0789 47.9 18.0537 48.0174 18.0246 48.1365C13.7559 46.1248 10.0246 45.4012 7.37227 45.19C7.97852 43.1549 8.80117 41.0223 9.85508 38.8715C12.3773 33.7312 16.2133 28.4916 21.5285 24.0873C24.8738 21.316 28.8033 18.8691 33.3863 16.9658C32.0619 18.5068 30.8314 20.1143 29.691 21.7615ZM48.9426 48.2229L43.6236 14.2449C47.7121 15.8203 51.5732 18.1457 55.0844 20.8523C60.8184 25.2656 65.6287 30.6566 69.0783 35.1926C70.5795 37.1682 71.8246 38.9816 72.7771 40.4736C72.7049 40.4826 72.6328 40.4898 72.5572 40.499C70.7998 40.7209 68.6853 41.1105 66.3758 41.652C62.9152 42.4621 59.0432 43.6059 55.4418 45.0367C53.6412 45.7531 51.9125 46.5416 50.325 47.4113C49.8482 47.6746 49.39 47.9469 48.9426 48.2229Z"
        fill="#0077CA"
      />
      <path
        d="M76.7273 74.3794H67.0781V78.0368H76.7273V74.3794Z"
        fill="#0077CA"
      />
      <path
        d="M100.001 74.3794H90.3516V78.0368H100.001V74.3794Z"
        fill="#0077CA"
      />
      <path
        d="M88.0809 60.4287H78.4316V64.0859H88.0809V60.4287Z"
        fill="#0077CA"
      />
      <path
        d="M28.0643 74.3994L27.9922 78.0584L37.6414 78.2498L37.7137 74.5924L28.0643 74.3994Z"
        fill="#0077CA"
      />
      <path
        d="M16.4258 60.2163L16.3535 63.8733L25.9992 64.0647L26.0752 60.4073L16.4258 60.2163Z"
        fill="#0077CA"
      />
    </svg>
  ),
  3: (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="浮き輪のアイコン"
    >
      <g clip-path="url(#clip0_15_229)">
        <path
          d="M50 0C22.3848 0.00351562 0.00175781 22.3857 0 50C0.00175781 77.616 22.3848 99.9982 50 100C77.6152 99.9982 99.9973 77.616 99.9992 50C99.9975 22.3857 77.6152 0.00351562 50 0ZM62.6644 6.69258C70.0289 8.84219 76.6186 12.8078 81.9039 18.0951C87.191 23.3822 91.1568 29.9701 93.3064 37.3346L69.9998 41.9516C67.8037 36.5201 63.4789 32.1953 58.0482 30.001L62.6644 6.69258ZM18.0943 18.0951C23.3814 12.808 29.9701 8.84219 37.3346 6.69258L41.9508 30.001C36.5199 32.1951 32.1945 36.5201 30.0002 41.9516L6.6918 37.3348C8.84238 29.9701 12.808 23.3824 18.0943 18.0951ZM37.3346 93.3092C29.9701 91.1578 23.3814 87.192 18.0943 81.9066C12.808 76.6176 8.84238 70.0299 6.6918 62.6652L30.0002 58.05C32.1945 63.4797 36.5201 67.8063 41.9508 70.0006L37.3346 93.3092ZM55.5447 65.7238C53.8041 66.3252 51.951 66.6672 50 66.6672C48.048 66.6672 46.1949 66.3254 44.4543 65.7238C43.9346 65.5453 43.4303 65.3338 42.927 65.1055C41.1699 64.2773 39.5771 63.1553 38.2111 61.7891C36.8459 60.423 35.7393 58.8285 34.9111 57.0723C34.6662 56.5689 34.4549 56.0482 34.2926 55.5293C33.675 53.8059 33.3328 51.952 33.3328 49.9998C33.3328 48.0496 33.675 46.1801 34.2926 44.4549C34.4549 43.9342 34.6662 43.4309 34.9111 42.9275C35.7393 41.1713 36.8459 39.577 38.2111 38.2125C39.5771 36.8465 41.1699 35.7227 42.927 34.8945C43.4303 34.6678 43.9346 34.4564 44.4543 34.2777C46.1785 33.6748 48.048 33.3344 50 33.3344C51.9512 33.3344 53.8207 33.6746 55.5447 34.2777C56.0646 34.4564 56.5689 34.6678 57.0732 34.8945C58.8293 35.7227 60.4221 36.8465 61.7883 38.2125C63.1535 39.577 64.26 41.1713 65.0883 42.9275C65.333 43.4309 65.5445 43.9344 65.7068 44.4549C66.3246 46.1801 66.6666 48.0496 66.6666 49.9998C66.6666 51.9518 66.3246 53.8059 65.7068 55.5293C65.5445 56.048 65.333 56.5687 65.0883 57.0723C64.2602 58.8285 63.1535 60.4228 61.7883 61.7891C60.4223 63.1551 58.8293 64.2771 57.0732 65.1055C56.5689 65.3338 56.0646 65.5453 55.5447 65.7238ZM81.9041 81.9066C76.6188 87.192 70.0291 91.1578 62.6646 93.3092L58.0484 70.0008C63.4789 67.8064 67.8039 63.4799 70 58.0502L93.3066 62.6654C91.1568 70.0299 87.1912 76.6176 81.9041 81.9066Z"
          fill="#0077CA"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_229">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  4: (
    <svg
      width="84"
      height="119"
      viewBox="0 0 84 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="サーフボードのアイコン"
    >
      <path
        d="M21.8891 30.0432C26.592 30.0432 30.409 26.0801 30.409 21.1929C30.409 16.3051 26.592 12.3423 21.8891 12.3423C17.1822 12.3423 13.3672 16.3054 13.3672 21.1929C13.3672 26.0801 17.1822 30.0432 21.8891 30.0432Z"
        fill="#0077CA"
      />
      <path
        d="M45.7294 55.3797L40.1158 45.9549C34.9216 37.5591 31.2649 34.5589 22.4655 34.2837C16.4204 34.0956 5.83881 36.2396 3.16892 51.7371L0.00375627 76.3606C-0.0825683 78.2611 1.32946 79.875 3.16099 79.9647C4.98812 80.0567 6.5402 78.5896 6.62851 76.6893L10.4004 58.8493L12.1066 113.524C12.1066 116.005 14.0388 118.014 16.4272 118.014C18.8157 118.014 20.7498 116.005 20.7498 113.524L22.4662 81.8822L24.1826 113.524C24.1826 116.005 26.1187 118.014 28.5052 118.014C30.8936 118.014 32.8278 116.005 32.8278 113.524L34.534 56.8998L39.3048 61.3709C39.6706 61.7896 40.061 62.1441 40.4578 62.4537C41.2039 63.3801 42.3264 63.974 43.5823 63.974L47.0313 63.8052C47.0231 62.8275 47.0167 61.8387 47.0167 60.8224C47.0167 58.9838 47.0352 57.2031 47.0681 55.4693L45.7294 55.3797Z"
        fill="#0077CA"
      />
      <path
        d="M59.2565 11.6917C55.5285 19.8016 52.0137 34.5412 52.0137 60.8227C52.0137 79.2366 53.5175 90.8569 55.4935 98.8533C57.255 105.982 59.3965 110.265 61.2812 114.035C61.5037 114.48 61.7225 114.918 61.9368 115.352L59.2565 11.6917ZM59.2565 11.6917C61.117 7.64458 63.0136 5.28506 64.5183 3.95624M59.2565 11.6917L64.5183 3.95624M64.5183 3.95624C65.2711 3.29143 65.9204 2.88914 66.4143 2.658M64.5183 3.95624L66.4143 2.658M66.4143 2.658C66.6615 2.54237 66.8634 2.47249 67.0148 2.4327M66.4143 2.658L67.0148 2.4327M67.0148 2.4327C67.0902 2.4129 67.1495 2.40149 67.1926 2.39521M67.0148 2.4327L67.1926 2.39521M67.1926 2.39521C67.2366 2.38882 67.2576 2.38867 67.2576 2.38867M67.1926 2.39521L67.2576 2.38867M67.2576 2.38867L67.2576 2.38867C67.2583 2.38868 67.2792 2.38896 67.3219 2.39518C67.3649 2.40144 67.4241 2.41284 67.4993 2.43263C67.6505 2.47239 67.8523 2.54225 68.0993 2.65788C68.593 2.889 69.2421 3.2913 69.9947 3.95614C71.4991 5.28499 73.3956 7.64456 75.2561 11.6917C78.9841 19.8016 82.4994 34.5412 82.4992 60.8227C82.4992 79.2365 80.9954 90.8568 79.0194 98.8531C77.2579 105.982 75.1165 110.265 73.2318 114.035C73.0093 114.48 72.7903 114.918 72.576 115.353C72.4447 115.619 72.242 115.956 71.9901 116.208C71.7441 116.454 71.561 116.515 71.4199 116.515H63.0933C62.9521 116.515 62.769 116.454 62.5229 116.208M67.2576 2.38867L62.5229 116.208M62.5229 116.208C62.2709 115.956 62.0681 115.618 61.937 115.353L62.5229 116.208Z"
        stroke="#0077CA"
        stroke-width="3"
      />
    </svg>
  ),
  5: (
    <svg
      width="100"
      height="99"
      viewBox="0 0 100 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ライフジャケットのアイコン"
    >
      <path
        d="M95.4135 70.4499V51.8476L93.708 50.9504C93.5889 50.8684 91.0324 49.3236 88.377 44.022C85.6959 38.6383 82.9307 29.3095 82.9307 13.6807L82.9322 13.6426C82.9342 13.0444 82.7984 12.1795 82.3619 11.1908C81.9256 10.2003 81.2086 9.08377 80.0678 7.85323C78.9877 6.69106 77.7076 5.8166 76.325 5.08132C73.9043 3.80492 71.1205 2.93999 68.2414 2.27714C63.9318 1.29028 59.4242 0.792989 55.9582 0.526388C52.4939 0.26344 50.0807 0.238687 50.0311 0.238687L50 3.57221L49.9688 0.238281C49.8918 0.24031 44.3352 0.291845 37.9148 1.17199C34.7002 1.61592 31.2707 2.2597 28.1313 3.25995C26.5598 3.75887 25.0578 4.34969 23.6732 5.08111C22.2924 5.8164 21.0123 6.69086 19.934 7.85303C18.7934 9.08357 18.0744 10.1999 17.6398 11.1906C17.2035 12.1793 17.0658 13.0442 17.0695 13.6424V13.6805C17.0695 30.0711 14.0309 39.5314 11.2305 44.78C9.82754 47.4069 8.47988 48.9977 7.54824 49.9099C7.08223 50.3652 6.72109 50.6491 6.50664 50.8053C6.39648 50.8836 6.32695 50.9291 6.29766 50.9463H6.2957L4.58828 51.8492V70.4497H0V86.65H4.58828V98.1029H50H95.4135V86.65H100V70.4497H95.4135V70.4499ZM88.9914 91.4318H52.2941V37.5826L64.6213 20.7766C65.4537 17.6655 62.9379 14.5604 49.9998 14.5604C37.0621 14.5604 34.5459 17.6655 35.3785 20.7766L47.7057 37.5826V91.4318H11.0105V55.623C12.507 54.3561 14.7223 52.0113 16.8496 48.0125C20.2717 41.5926 23.4588 31.0158 23.4883 13.9469C23.5176 13.8822 23.5652 13.787 23.6441 13.6555C23.8018 13.3946 24.0824 12.9945 24.5609 12.48C24.9553 12.0458 25.6504 11.5199 26.591 11.0228C28.2396 10.1445 30.5961 9.37107 33.1434 8.78998C36.9723 7.91004 41.2398 7.42614 44.5113 7.17841C46.1508 7.05465 47.5426 6.98587 48.5199 6.94975C49.0078 6.93068 49.393 6.92114 49.6496 6.91546C49.7797 6.91343 49.8789 6.90978 49.943 6.90796H50.0129H50.0164C50.5813 6.91546 55.9801 7.02421 61.8045 7.86419C64.7129 8.28336 67.7279 8.89305 70.2311 9.71416C71.4799 10.122 72.5984 10.5866 73.4971 11.0725C74.3939 11.5526 75.0576 12.0612 75.441 12.4765C76.16 13.2597 76.4277 13.7586 76.5119 13.9491C76.5432 31.018 79.7285 41.5966 83.1522 48.0127C85.2777 52.0113 87.4928 54.3563 88.9912 55.6232L88.9914 91.4318Z"
        fill="#0077CA"
      />
    </svg>
  ),
  6: (
    <svg
      width="64"
      height="114"
      viewBox="0 0 64 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ウェットスーツのアイコン"
    >
      <path
        d="M62.1797 28.6995L54.5468 15.8843C47.4841 4.46829 42.512 0.388799 30.5472 0.0145994C22.3274 -0.241088 7.93923 2.67412 4.30888 23.7466L0.00510753 57.2279C-0.112271 59.8122 1.80771 62.0067 4.2981 62.1286C6.78251 62.2536 8.89293 60.2588 9.013 57.6749L14.1417 33.4173L16.4617 107.76C16.4617 111.134 19.089 113.866 22.3366 113.866C25.5843 113.866 28.2143 111.134 28.2143 107.76L30.548 64.7359L32.8818 107.76C32.8818 111.134 35.5145 113.866 38.7594 113.866C42.0071 113.866 44.6371 111.134 44.6371 107.76L46.9571 30.7665L53.444 36.846C53.9414 37.4153 54.4723 37.8974 55.0119 38.3182C56.0263 39.578 57.5526 40.3855 59.2602 40.3855L63.95 40.156C63.9389 38.8265 63.9302 37.4821 63.9302 36.1001C63.9302 33.6002 63.9554 31.1789 64 28.8214L62.1797 28.6995Z"
        fill="#0077CA"
      />
    </svg>
  ),
};

const RentalItem: React.FC<RentalItemProps> = ({ id, name }) => (
    <div className="flex flex-col space-y-8">
      <div className="relative">
        <svg
          width="186"
          height="186"
          viewBox="0 0 186 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="93" cy="93" r="90" fill="white" />
          <circle
            cx="93"
            cy="93"
            r="91.5"
            stroke="#0077CA"
            stroke-opacity="0.4"
            stroke-width="3"
          />
        </svg>
        <div className="absolute flex items-center justify-center inset-0">
          {RentalItemIcons[id]}
        </div>
      </div>
      <div className="m-auto text-[#212121] text-2xl font-semibold tracking-widest">
        {name}
      </div>
    </div>
);

const Rental = () => {
  return (
    <section className="px-20 py-48">
      <div className="mb-12">
        <div className="flex items-baseline space-x-4 mb-6 text-primary">
          <h1 className="text-6xl font-semibold tracking-[6px]">RENTAL</h1>
          <span className="text-3xl font-semibold tracking-[3px]">
            レンタルサービス
          </span>
        </div>
        <p className="text-primary text-3xl font-semibold tracking-[3px] mb-6">
          営業時間: 10:00-17:00 （最終受付 16:00）
        </p>
      </div>
      <div className="flex space-x-11 justify-between">
        <RentalItem
          id={1}
          name="ビーチチェア"
        />
        <RentalItem
          id={2}
          name="パラソル"
        />
        <RentalItem
          id={3}
          name="浮き輪"
        />
        <RentalItem
          id={4}
          name="サーフボード"
        />
        <RentalItem
          id={5}
          name="ライフジャケット"
        />
        <RentalItem
          id={6}
          name="ウェットスーツ"
        />
      </div>
    </section>
  );
};

export default Rental;
