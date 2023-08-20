import { ReactNode } from "react";
import styles from "./layout.module.scss";

export function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbarTitles}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="187"
            height="50"
            viewBox="0 0 187 50"
            fill="none"
          >
            <path
              d="M0.369559 0.630387H14.5872L14.6896 9.07201H13.9083C13.2764 4.27943 11.9657 1.88314 9.97606 1.88314H9.57899V25.2036H12.1791V26.4756H2.7904V25.2036H5.37775V1.88314H4.99349C3.00387 1.88314 1.68885 4.27943 1.04842 9.07201H0.26709L0.369559 0.630387Z"
              fill="#393939"
            />
            <path
              d="M16.073 13.447C16.073 9.57953 16.833 6.41874 18.3529 3.96463C19.8729 1.49768 21.696 0.264198 23.8222 0.264198C25.7948 0.264198 27.5581 1.42058 29.1122 3.73336C30.6749 6.04613 31.4562 9.33541 31.4562 13.6012C31.4562 17.5971 30.7175 20.8029 29.2403 23.2185C27.7716 25.6212 25.9741 26.8225 23.8478 26.8225C21.5508 26.8225 19.6807 25.5441 18.2376 22.9872C16.7945 20.4303 16.073 17.2502 16.073 13.447ZM26.6786 13.5626C26.6786 9.60523 26.6273 6.99694 26.5248 5.73776C26.4309 4.47858 26.179 3.46353 25.7691 2.69261C25.3678 1.92169 24.7017 1.53622 23.771 1.53622C22.9854 1.53622 22.3578 1.85102 21.8881 2.48061C21.427 3.09734 21.1367 4.09312 21.0171 5.46794C20.9061 6.84275 20.8506 9.52814 20.8506 13.5241C20.8506 17.4815 20.8976 20.1026 20.9915 21.3875C21.094 22.6595 21.3544 23.6746 21.7728 24.4327C22.1998 25.1907 22.8658 25.5698 23.771 25.5698C24.5224 25.5698 25.133 25.2678 25.6026 24.664C26.0808 24.0472 26.3797 23.0514 26.4992 21.6766C26.6188 20.3018 26.6786 17.5971 26.6786 13.5626Z"
              fill="#393939"
            />
            <path
              d="M39.833 0.630387L43.0352 15.5863L46.263 0.630387H53.026V1.88314H50.8229V25.2036H53.026V26.4756H44.3673V25.2036H46.6216V3.2708L41.6647 26.4756H41.0627L36.0289 2.98171V22.5632C36.0289 23.6425 36.1185 24.3556 36.2979 24.7025C36.4772 25.0366 36.9724 25.2036 37.7837 25.2036H38.3857V26.4756H32.6474V25.2036H33.6977C34.3637 25.2036 34.7694 25.0366 34.9145 24.7025C35.0597 24.3684 35.1323 23.6939 35.1323 22.6788V1.88314H32.6474V0.630387H39.833Z"
              fill="#393939"
            />
            <path
              d="M63.8493 19.2482H58.444L57.7139 21.8886C57.4321 22.9422 57.2912 23.7067 57.2912 24.1821C57.2912 24.8631 57.7182 25.2036 58.5721 25.2036H59.52V26.4756H53.9866V25.2036H54.4862C55.1437 25.2036 55.5877 25.0366 55.8183 24.7025C56.0488 24.3684 56.3306 23.5911 56.6636 22.3705L62.6709 0.14856H63.4266L69.7285 25.2036H71.5089V26.4756H63.0551V25.2036H65.3479L63.8493 19.2482ZM58.8155 17.9184H63.5034L61.2491 8.95637L58.8155 17.9184Z"
              fill="#393939"
            />
            <path
              d="M82.7421 0.746026L82.947 7.68434H81.9223C81.3843 5.39727 80.7695 3.80403 80.0779 2.90461C79.3947 1.99235 78.5664 1.53622 77.593 1.53622C76.7647 1.53622 76.0816 1.92811 75.5436 2.71188C75.0056 3.49566 74.7366 4.40149 74.7366 5.42939C74.7366 6.70142 75.0184 7.57513 75.582 8.05053C76.1456 8.52594 77.1148 8.98207 78.4896 9.41892C80.5987 10.0999 82.012 11.1278 82.7292 12.5026C83.4551 13.8646 83.818 15.5992 83.818 17.7064C83.818 20.1862 83.3398 22.3255 82.3834 24.1243C81.4356 25.9231 80.1035 26.8225 78.3871 26.8225C77.166 26.8225 76.0645 26.2443 75.0825 25.088C74.6043 25.6533 74.1731 26.2058 73.7888 26.7454H72.9306V19.2097H73.9297C74.6811 23.4497 76.1413 25.5698 78.3103 25.5698C79.4545 25.5698 80.334 25.0623 80.9489 24.0472C81.5637 23.0322 81.8711 21.895 81.8711 20.6359C81.8711 19.9292 81.7344 19.2932 81.4612 18.7278C81.1965 18.1625 80.8848 17.7128 80.5262 17.3787C80.1675 17.0446 79.177 16.6271 77.5546 16.126C75.9321 15.6249 74.7409 14.6869 73.9809 13.3121C73.2295 11.9373 72.8538 10.222 72.8538 8.16617C72.8538 5.95619 73.3149 4.0867 74.2371 2.5577C75.1679 1.0287 76.3249 0.264198 77.7083 0.264198C78.7586 0.264198 79.8046 0.816694 80.8464 1.92169C81.1794 1.62616 81.538 1.23428 81.9223 0.746026H82.7421Z"
              fill="#393939"
            />
            <path
              d="M91.7466 1.88314V25.2036H94.0777V26.4756H85.291V25.2036H87.5453V1.88314H85.291V0.630387H94.0777V1.88314H91.7466Z"
              fill="#393939"
            />
            <path
              d="M101.391 0.630387L108.218 15.8176V4.69701C108.218 3.52778 108.142 2.7697 107.988 2.42279C107.834 2.06302 107.429 1.88314 106.771 1.88314H105.964V0.630387H111.177V1.88314H110.575C109.926 1.88314 109.521 2.0309 109.358 2.32642C109.196 2.62194 109.115 3.21298 109.115 4.09955V26.8225H108.218L98.01 4.09955V22.7559C98.01 23.7967 98.0826 24.4648 98.2277 24.7603C98.3729 25.0558 98.7742 25.2036 99.4317 25.2036H100.431V26.4756H95V25.2036H95.6788C96.3705 25.2036 96.7846 25.0301 96.9212 24.6832C97.0579 24.3363 97.1262 23.4176 97.1262 21.9272V4.09955C97.1262 3.12304 97.0621 2.51273 96.9341 2.2686C96.8145 2.01163 96.4559 1.88314 95.8581 1.88314H94.9231V0.630387H101.391Z"
              fill="#393939"
            />
            <path
              d="M112.343 13.447C112.343 9.57953 113.103 6.41874 114.623 3.96463C116.143 1.49768 117.966 0.264198 120.092 0.264198C122.065 0.264198 123.828 1.42058 125.382 3.73336C126.945 6.04613 127.726 9.33541 127.726 13.6012C127.726 17.5971 126.987 20.8029 125.51 23.2185C124.041 25.6212 122.244 26.8225 120.118 26.8225C117.821 26.8225 115.951 25.5441 114.508 22.9872C113.064 20.4303 112.343 17.2502 112.343 13.447ZM122.948 13.5626C122.948 9.60523 122.897 6.99694 122.795 5.73776C122.701 4.47858 122.449 3.46353 122.039 2.69261C121.638 1.92169 120.972 1.53622 120.041 1.53622C119.255 1.53622 118.628 1.85102 118.158 2.48061C117.697 3.09734 117.407 4.09312 117.287 5.46794C117.176 6.84275 117.121 9.52814 117.121 13.5241C117.121 17.4815 117.167 20.1026 117.261 21.3875C117.364 22.6595 117.624 23.6746 118.043 24.4327C118.47 25.1907 119.136 25.5698 120.041 25.5698C120.792 25.5698 121.403 25.2678 121.873 24.664C122.351 24.0472 122.65 23.0514 122.769 21.6766C122.889 20.3018 122.948 17.5971 122.948 13.5626Z"
              fill="#393939"
            />
            <path
              d="M143.25 8.84073L145.876 18.7086L149.578 4.63919C149.578 4.6135 149.646 4.35652 149.783 3.86827C149.928 3.36717 150 2.91746 150 2.51915C150 2.09514 149.71 1.88314 149.129 1.88314H148.258V0.630387H153.01V1.88314H152.613C151.922 1.88314 151.499 1.98593 151.345 2.19151C151.192 2.38424 150.952 3.09734 150.628 4.33082L144.646 26.9574H143.801L140.919 16.1645L137.461 26.9574H136.615L129.929 1.88314H128.098V0.630387H147.131V1.88314H146.696C146.141 1.88314 145.765 1.99235 145.569 2.21078C145.372 2.42921 145.116 3.0331 144.8 4.02245L143.25 8.84073ZM141.419 1.88314L142.84 7.22179L143.942 3.73336C144.096 3.25795 144.172 2.87892 144.172 2.59624C144.172 2.12084 143.92 1.88314 143.417 1.88314H141.419ZM134.182 1.88314L138.895 19.4988L140.496 14.4685L137.115 1.88314H134.182Z"
              fill="#393939"
            />
            <path
              d="M160.298 1.88314V12.811H160.849C162.634 12.811 163.667 11.2884 163.949 8.24326H164.782V18.8242H163.949C163.804 15.6634 162.771 14.083 160.849 14.083H160.298V25.2036H163.232C165.819 25.2036 167.51 22.8009 168.304 17.9955H169.188L168.829 26.4756H153.92V25.2036H156.097V1.88314H153.92V0.630387H168.304L168.534 7.83853H167.689C167.151 5.39727 166.481 3.7976 165.678 3.03953C164.884 2.2686 163.834 1.88314 162.527 1.88314H160.298Z"
              fill="#393939"
            />
            <path
              d="M179.486 26.4756H170.648V25.2036H172.825V1.88314H170.648V0.630387H179.755C181.864 0.630387 183.371 1.24713 184.276 2.48061C185.19 3.70124 185.647 5.10817 185.647 6.70142C185.647 8.03768 185.297 9.29686 184.597 10.4789C183.896 11.6482 182.675 12.4127 180.933 12.7724V12.8495C184.494 13.5434 186.274 15.702 186.274 19.3253C186.274 21.4839 185.702 23.2185 184.558 24.529C183.414 25.8268 181.723 26.4756 179.486 26.4756ZM177.027 1.88314V12.2328H178.013C179.277 12.2328 180.122 11.9694 180.549 11.4426C180.976 10.9158 181.189 9.4382 181.189 7.00979C181.189 4.97968 181.014 3.61772 180.664 2.92389C180.323 2.23006 179.563 1.88314 178.384 1.88314H177.027ZM178.307 13.4855H177.027V25.2036H178.013C179.55 25.2036 180.532 24.831 180.959 24.0858C181.394 23.3405 181.612 21.6124 181.612 18.9013C181.612 16.7427 181.356 15.3036 180.844 14.5841C180.34 13.8517 179.494 13.4855 178.307 13.4855Z"
              fill="#393939"
            />
            <path
              d="M0.107254 28.6589H14.9887L15.096 35.4542H14.2782C13.6168 31.5963 12.2448 29.6673 10.1623 29.6673H9.74671V48.4398H12.4683V49.4637H2.64113V48.4398H5.34929V29.6673H4.94709C2.86458 29.6673 1.48815 31.5963 0.817812 35.4542H0L0.107254 28.6589Z"
              fill="#393939"
            />
            <path
              d="M28.0212 39.2708H22.0954V48.4398H24.3745V49.4637H15.4188V48.4398H17.698V29.6673H15.4188V28.6589H24.3745V29.6673H22.0954V38.1848H28.0212V29.6673H25.7688V28.6589H34.6977V29.6673H32.4186V48.4398H34.6977V49.4637H25.7688V48.4398H28.0212V39.2708Z"
              fill="#393939"
            />
            <path
              d="M41.8044 29.6673V38.464H42.3809C44.2489 38.464 45.3304 37.2384 45.6253 34.7871H46.4968V43.3045H45.6253C45.4734 40.7601 44.3919 39.488 42.3809 39.488H41.8044V48.4398H44.8745C47.5827 48.4398 49.3524 46.5056 50.1836 42.6374H51.1087L50.7333 49.4637H35.1278V48.4398H37.407V29.6673H35.1278V28.6589H50.1836L50.4249 34.4613H49.5401C48.977 32.4961 48.2754 31.2084 47.4352 30.5982C46.604 29.9776 45.5047 29.6673 44.1372 29.6673H41.8044Z"
              fill="#393939"
            />
            <path
              d="M63.807 38.8519V48.4398H66.1532V49.4637H57.1439V48.4398H59.423V29.6673H57.1439V28.6589H66.1532C69.0401 28.6589 71.0109 29.1709 72.0656 30.1948C73.1202 31.2188 73.6476 32.3151 73.6476 33.4839C73.6476 34.725 73.1649 35.7852 72.1996 36.6643C71.2344 37.5435 69.7864 38.1227 67.8559 38.402V38.464C69.3127 38.8881 70.3987 39.4518 71.1137 40.1551C71.8377 40.8481 72.289 41.6186 72.4678 42.4667C72.6555 43.3149 72.7538 44.3285 72.7627 45.5076C72.7806 46.6763 72.8655 47.4003 73.0175 47.6796C73.1783 47.9588 73.4688 48.0985 73.8889 48.0985C74.3537 48.0985 74.8587 47.9278 75.4039 47.5865V48.7656C74.528 49.2931 73.5582 49.5568 72.4946 49.5568C71.1003 49.5568 69.9831 49.1534 69.1429 48.3467C68.3027 47.5399 67.8514 46.0764 67.7888 43.9561C67.7352 41.8358 67.4983 40.455 67.0783 39.8138C66.6582 39.1725 65.8895 38.8519 64.7723 38.8519H63.807ZM63.807 29.6673V37.8279H65.5097C66.6895 37.8279 67.5073 37.5797 67.9631 37.0832C68.4189 36.5764 68.6469 35.4284 68.6469 33.639C68.6469 31.9221 68.4323 30.8309 68.0033 30.3655C67.5743 29.9001 66.828 29.6673 65.7644 29.6673H63.807Z"
              fill="#393939"
            />
            <path
              d="M83.583 28.9071V48.4398H86.8275V49.4637H75.9814V48.4398H79.4404V30.3034H75.9814V29.295H78.0192C78.922 29.295 80.0526 29.2278 81.4111 29.0933L83.1004 28.9071H83.583Z"
              fill="#393939"
            />
            <path
              d="M93.8671 28.752C95.5474 28.752 96.9819 29.7553 98.1707 31.7618C99.3594 33.758 99.9538 36.3023 99.9538 39.3949C99.9538 40.9153 99.6722 42.5805 99.1091 44.3905C98.5461 46.1902 97.7685 47.5503 96.7764 48.4708C95.7932 49.3913 94.8056 49.8516 93.8135 49.8516C92.1778 49.8516 90.7523 48.8173 89.5367 46.7487C88.3212 44.6698 87.7134 42.1771 87.7134 39.2708C87.7134 36.3954 88.3078 33.9235 89.4965 31.8549C90.6942 29.7863 92.151 28.752 93.8671 28.752ZM93.7598 48.8276C94.2961 48.8276 94.7028 48.476 94.9799 47.7727C95.2659 47.059 95.4357 44.7732 95.4893 40.9153L95.5698 36.6333C95.5698 34.3062 95.4312 32.5789 95.1541 31.4515C94.8771 30.3241 94.4391 29.7604 93.8403 29.7604C93.1253 29.7604 92.656 30.5 92.4326 31.979C92.2181 33.458 92.1108 36.1317 92.1108 39.9999C92.1108 42.9684 92.1868 45.0473 92.3387 46.2367C92.4996 47.4262 92.6828 48.1553 92.8884 48.4243C93.1029 48.6932 93.3934 48.8276 93.7598 48.8276Z"
              fill="#393939"
            />
            <path
              d="M108.307 28.9071V48.4398H111.552V49.4637H100.706V48.4398H104.165V30.3034H100.706V29.295H102.743C103.646 29.295 104.777 29.2278 106.135 29.0933L107.825 28.9071H108.307Z"
              fill="#393939"
            />
            <path
              d="M118.177 28.6589H133.058L133.165 35.4542H132.348C131.686 31.5963 130.314 29.6673 128.232 29.6673H127.816V48.4398H130.538V49.4637H120.711V48.4398H123.419V29.6673H123.017C120.934 29.6673 119.558 31.5963 118.887 35.4542H118.07L118.177 28.6589Z"
              fill="#393939"
            />
            <path
              d="M133.515 38.976C133.515 35.8628 134.311 33.3184 135.902 31.3429C137.492 29.3571 139.401 28.3641 141.626 28.3641C143.691 28.3641 145.537 29.295 147.163 31.1567C148.799 33.0185 149.617 35.6662 149.617 39.1001C149.617 42.3168 148.844 44.8973 147.297 46.8418C145.76 48.7759 143.879 49.743 141.653 49.743C139.249 49.743 137.291 48.7139 135.781 46.6556C134.27 44.5974 133.515 42.0375 133.515 38.976ZM144.616 39.0691C144.616 35.8835 144.562 33.7838 144.455 32.7702C144.357 31.7566 144.093 30.9395 143.664 30.319C143.244 29.6984 142.547 29.3881 141.573 29.3881C140.75 29.3881 140.093 29.6415 139.602 30.1483C139.119 30.6448 138.815 31.4463 138.69 32.553C138.574 33.6597 138.516 35.8214 138.516 39.038C138.516 42.2237 138.565 44.3336 138.663 45.3679C138.771 46.3919 139.043 47.209 139.481 47.8192C139.928 48.4294 140.625 48.7346 141.573 48.7346C142.359 48.7346 142.998 48.4915 143.49 48.0054C143.99 47.5089 144.303 46.7073 144.428 45.6006C144.553 44.4939 144.616 42.3168 144.616 39.0691Z"
              fill="#393939"
            />
            <path
              d="M156.603 29.6673V43.1028C156.603 45.2542 156.942 46.697 157.622 47.4313C158.301 48.1553 159.221 48.5173 160.383 48.5173C161.259 48.5173 162.05 48.326 162.756 47.9433C163.462 47.5606 164.017 46.9866 164.419 46.2212C164.821 45.4455 165.022 44.1319 165.022 42.2806V31.2964C165.022 30.5827 164.982 30.1328 164.901 29.9466C164.821 29.7604 164.441 29.6673 163.762 29.6673H162.528V28.6589H168.267V29.6673H167.422C166.752 29.6673 166.34 29.7604 166.188 29.9466C166.037 30.1224 165.961 30.6137 165.961 31.4205V42.1875C165.961 43.5527 165.844 44.7525 165.612 45.7868C165.389 46.8108 164.785 47.7261 163.802 48.5329C162.828 49.3396 161.322 49.743 159.284 49.743C158.211 49.743 157.166 49.6034 156.147 49.3241C155.137 49.0345 154.31 48.5277 153.667 47.8037C153.023 47.0797 152.616 46.3402 152.447 45.5851C152.286 44.8197 152.205 43.9303 152.205 42.9166V29.6673H149.846V28.6589H159.069V29.6673H156.603Z"
              fill="#393939"
            />
            <path
              d="M174.555 38.8519V48.4398H176.902V49.4637H167.892V48.4398H170.171V29.6673H167.892V28.6589H176.902C179.788 28.6589 181.759 29.1709 182.814 30.1948C183.869 31.2188 184.396 32.3151 184.396 33.4839C184.396 34.725 183.913 35.7852 182.948 36.6643C181.983 37.5435 180.535 38.1227 178.604 38.402V38.464C180.061 38.8881 181.147 39.4518 181.862 40.1551C182.586 40.8481 183.037 41.6186 183.216 42.4667C183.404 43.3149 183.502 44.3285 183.511 45.5076C183.529 46.6763 183.614 47.4003 183.766 47.6796C183.927 47.9588 184.217 48.0985 184.637 48.0985C185.102 48.0985 185.607 47.9278 186.152 47.5865V48.7656C185.276 49.2931 184.307 49.5568 183.243 49.5568C181.849 49.5568 180.731 49.1534 179.891 48.3467C179.051 47.5399 178.6 46.0764 178.537 43.9561C178.484 41.8358 178.247 40.455 177.827 39.8138C177.407 39.1725 176.638 38.8519 175.521 38.8519H174.555ZM174.555 29.6673V37.8279H176.258C177.438 37.8279 178.256 37.5797 178.711 37.0832C179.167 36.5764 179.395 35.4284 179.395 33.639C179.395 31.9221 179.181 30.8309 178.752 30.3655C178.323 29.9001 177.576 29.6673 176.513 29.6673H174.555Z"
              fill="#393939"
            />
          </svg>
          <div >
            <h3 className={styles.logo}>GET YOUR TICKETS NOW</h3>
          </div>
        </div>
        <ul className={styles.links}>
          <li>
            <a className={styles.navbarLink} href="">
              ABOUT
            </a>
          </li>
          <li>
            <a className={styles.navbarLink} href="">
              R101
            </a>
          </li>
          <li>
            <a className={styles.navbarLink} href="">
              FAQ
            </a>
          </li>
          <li>
            <a className={styles.navbarLink} href="">
              THE POOL
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a className={styles.footerLink} href="">
            © TomasinoWeb
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="">
            Departments
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="">
            Application Form
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="">
            Frequently Asked Questions
          </a>
        </li>
      </ul>
      <ul className={styles.svgLinks}>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0008 1.66663C5.39844 1.66663 1.66748 5.39758 1.66748 9.99996C1.66748 14.1594 4.71486 17.6069 8.69875 18.232V12.4088H6.58284V9.99996H8.69875V8.16403C8.69875 6.07548 9.94283 4.92183 11.8463 4.92183C12.7581 4.92183 13.7117 5.08459 13.7117 5.08459V7.13538H12.6609C11.6257 7.13538 11.3029 7.77774 11.3029 8.43679V9.99996H13.6141L13.2447 12.4088H11.3029V18.232C15.2867 17.6069 18.3342 14.1594 18.3342 9.99996C18.3342 5.39758 14.6032 1.66663 10.0008 1.66663Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.5104 4.71337C17.8743 4.99479 17.1996 5.17962 16.5088 5.26176C17.2366 4.8261 17.7812 4.14075 18.0411 3.33337C17.3573 3.73967 16.6088 4.02564 15.8282 4.17884C15.1693 3.47588 14.2483 3.07752 13.2848 3.07862C11.3605 3.07862 9.79975 4.63884 9.79975 6.56402C9.79975 6.83715 9.83109 7.10202 9.88967 7.35757C6.99206 7.2117 4.42506 5.82504 2.70565 3.71617C2.39608 4.24806 2.23338 4.85265 2.2342 5.46806C2.2342 6.67716 2.84967 7.74437 3.78458 8.36917C3.23115 8.35167 2.6899 8.2022 2.20599 7.93311C2.20545 7.94775 2.20545 7.96239 2.20545 7.97623C2.20545 9.66533 3.40683 11.0743 5.00166 11.3942C4.70234 11.4752 4.3936 11.5162 4.08352 11.5159C3.85831 11.5159 3.63976 11.4952 3.42733 11.4544C3.8711 12.8387 5.15739 13.8466 6.683 13.8742C5.44845 14.8432 3.92391 15.3688 2.35453 15.3666C2.07677 15.3668 1.79925 15.3504 1.52344 15.3176C3.1167 16.3418 4.97127 16.8854 6.86535 16.8834C13.2763 16.8834 16.7817 11.5729 16.7817 6.96759C16.7817 6.81692 16.778 6.66572 16.7713 6.51664C17.4536 6.02371 18.0425 5.41306 18.5104 4.71337Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0008 7.49996C8.61967 7.49996 7.50081 8.61921 7.50081 9.99996C7.50081 11.381 8.62008 12.5 10.0008 12.5C11.3819 12.5 12.5008 11.3807 12.5008 9.99996C12.5008 8.61888 11.3816 7.49996 10.0008 7.49996ZM10.0008 5.83329C12.3012 5.83329 14.1675 7.69754 14.1675 9.99996C14.1675 12.3004 12.3032 14.1666 10.0008 14.1666C7.70042 14.1666 5.83415 12.3024 5.83415 9.99996C5.83415 7.69957 7.6984 5.83329 10.0008 5.83329ZM15.4175 5.62425C15.4175 6.19934 14.9502 6.66593 14.3758 6.66593C13.8007 6.66593 13.3342 6.19863 13.3342 5.62425C13.3342 5.04988 13.8014 4.58329 14.3758 4.58329C14.9494 4.58257 15.4175 5.04988 15.4175 5.62425ZM10.0008 3.33329C7.93875 3.33329 7.60265 3.33875 6.64356 3.38146C5.99012 3.41213 5.55211 3.50002 5.14513 3.65802C4.78346 3.79828 4.52257 3.96578 4.2446 4.24375C3.96556 4.52279 3.79836 4.78298 3.65866 5.14482C3.5003 5.55273 3.41244 5.99005 3.38231 6.64258C3.33919 7.56263 3.33415 7.88417 3.33415 9.99996C3.33415 12.062 3.33961 12.3981 3.38231 13.3571C3.413 14.0103 3.501 14.449 3.65861 14.855C3.79925 15.2171 3.96708 15.4786 4.24371 15.7553C4.52386 16.035 4.78482 16.2028 5.14322 16.3411C5.55516 16.5004 5.9929 16.5884 6.64343 16.6185C7.56348 16.6615 7.88502 16.6666 10.0008 16.6666C12.0629 16.6666 12.399 16.6611 13.358 16.6185C14.0097 16.5879 14.4487 16.4996 14.8558 16.3421C15.217 16.2019 15.4793 16.0335 15.7562 15.757C16.0363 15.4765 16.2037 15.2161 16.3422 14.8569C16.5011 14.4465 16.5892 14.0081 16.6193 13.3574C16.6624 12.4373 16.6675 12.1157 16.6675 9.99996C16.6675 7.93789 16.662 7.6018 16.6193 6.64277C16.5887 5.99084 16.5004 5.5512 16.3427 5.14428C16.2028 4.78361 16.0347 4.52192 15.757 4.24375C15.4775 3.96425 15.218 3.7974 14.8559 3.65781C14.4483 3.49958 14.0103 3.41159 13.3582 3.38147C12.4382 3.33833 12.1166 3.33329 10.0008 3.33329ZM10.0008 1.66663C12.2647 1.66663 12.5473 1.67496 13.4362 1.71663C14.323 1.7576 14.9279 1.89788 15.4592 2.10413C16.0084 2.31593 16.4723 2.60204 16.9355 3.06523C17.398 3.52843 17.6842 3.99371 17.8967 4.54163C18.1022 5.07218 18.2425 5.67773 18.2842 6.56454C18.3237 7.45343 18.3342 7.73607 18.3342 9.99996C18.3342 12.2639 18.3258 12.5465 18.2842 13.4354C18.2432 14.3222 18.1022 14.927 17.8967 15.4583C17.6848 16.0076 17.398 16.4715 16.9355 16.9347C16.4723 17.3972 16.0063 17.6833 15.4592 17.8958C14.9279 18.1014 14.323 18.2416 13.4362 18.2833C12.5473 18.3229 12.2647 18.3333 10.0008 18.3333C7.73692 18.3333 7.45428 18.325 6.5654 18.2833C5.67859 18.2423 5.07442 18.1014 4.54248 17.8958C3.99386 17.684 3.52928 17.3972 3.06609 16.9347C2.6029 16.4715 2.31748 16.0055 2.10498 15.4583C1.89873 14.927 1.75915 14.3222 1.71748 13.4354C1.6779 12.5465 1.66748 12.2639 1.66748 9.99996C1.66748 7.73607 1.67581 7.45343 1.71748 6.56454C1.75845 5.67704 1.89873 5.07288 2.10498 4.54163C2.31678 3.99302 2.6029 3.52843 3.06609 3.06523C3.52928 2.60204 3.99456 2.31663 4.54248 2.10413C5.07373 1.89788 5.6779 1.75829 6.5654 1.71663C7.45428 1.67704 7.73692 1.66663 10.0008 1.66663Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3333 6.8711V12.9166C13.3333 15.9082 10.9082 18.3333 7.91667 18.3333C4.92512 18.3333 2.5 15.9082 2.5 12.9166C2.5 9.92504 4.92512 7.49996 7.91667 7.49996C8.34692 7.49996 8.76542 7.55012 9.16667 7.6449V10.2806C8.78783 10.1006 8.364 9.99996 7.91667 9.99996C6.30583 9.99996 5 11.3058 5 12.9166C5 14.5275 6.30583 15.8333 7.91667 15.8333C9.5275 15.8333 10.8333 14.5275 10.8333 12.9166V1.66663H13.3333C13.3333 3.96781 15.1988 5.83329 17.5 5.83329V8.33329C15.9234 8.33329 14.4747 7.78603 13.3333 6.8711Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.2033 3.33337C10.6484 3.33582 11.762 3.34659 12.9452 3.39398L13.3647 3.41227C14.5559 3.46867 15.7462 3.56502 16.3365 3.72962C17.1239 3.95083 17.7428 4.59629 17.952 5.41447C18.2851 6.71372 18.3267 9.24954 18.3319 9.86321L18.3327 9.99037V9.99929C18.3327 9.99929 18.3327 10.0024 18.3327 10.0083L18.3319 10.1355C18.3267 10.7491 18.2851 13.285 17.952 14.5842C17.7399 15.4054 17.121 16.0509 16.3365 16.269C15.7462 16.4336 14.5559 16.53 13.3647 16.5864L12.9452 16.6046C11.762 16.652 10.6484 16.6628 10.2033 16.6653L10.008 16.666H9.99933C9.99933 16.666 9.99641 16.666 9.99066 16.666L9.7955 16.6653C8.8535 16.6601 4.91485 16.6175 3.66217 16.269C2.87475 16.0478 2.25585 15.4024 2.04664 14.5842C1.71358 13.285 1.67195 10.7491 1.66675 10.1355V9.86321C1.67195 9.24954 1.71358 6.71372 2.04664 5.41447C2.25875 4.59326 2.87765 3.94781 3.66217 3.72962C4.91485 3.38107 8.8535 3.33856 9.7955 3.33337H10.2033ZM8.33267 7.08266V12.916L13.3327 9.99929L8.33267 7.08266Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39758 5.39771 1.66663 10.0001 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10.0001 18.3333ZM8.09176 16.3895C7.28961 14.6882 6.79785 12.8118 6.68951 10.8333H3.38499C3.71508 13.4804 5.59707 15.6455 8.09176 16.3895ZM8.359 10.8333C8.48433 12.8656 9.06491 14.7747 10.0001 16.46C10.9352 14.7747 11.5158 12.8656 11.6412 10.8333H8.359ZM16.6152 10.8333H13.3107C13.2023 12.8118 12.7106 14.6882 11.9084 16.3895C14.4031 15.6455 16.2851 13.4804 16.6152 10.8333ZM3.38499 9.16663H6.68951C6.79785 7.1881 7.28961 5.31168 8.09176 3.61043C5.59707 4.3544 3.71508 6.51954 3.38499 9.16663ZM8.359 9.16663H11.6412C11.5158 7.13431 10.9352 5.22517 10.0001 3.53995C9.06491 5.22517 8.48433 7.13431 8.359 9.16663ZM11.9084 3.61043C12.7106 5.31168 13.2023 7.1881 13.3107 9.16663H16.6152C16.2851 6.51954 14.4031 4.3544 11.9084 3.61043Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.8332 6.52373V16.6667H9.16658V6.52373L4.69657 10.9937L3.51807 9.81521L9.99992 3.33337L16.4817 9.81521L15.3032 10.9937L10.8332 6.52373Z"
                fill="#393939"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
