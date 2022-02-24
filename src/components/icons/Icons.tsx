import React from 'react';
import { IIconProps } from '@interfaces';

export const IconSearch = (props: IIconProps) => {
  // props
  const { width, height } = props;
  return (
    <svg
      width={width || '19'}
      height={height || '19'}
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.4697 18.5304C17.7626 18.8233 18.2374 18.8233 18.5303 18.5304C18.8232 18.2375 18.8232 17.7626 18.5303 17.4697L17.4697 18.5304ZM15.25 8.50003C15.25 12.228 12.2279 15.25 8.5 15.25V16.75C13.0563 16.75 16.75 13.0564 16.75 8.50003H15.25ZM8.5 15.25C4.77208 15.25 1.75 12.228 1.75 8.50003H0.25C0.25 13.0564 3.94365 16.75 8.5 16.75V15.25ZM1.75 8.50003C1.75 4.77211 4.77208 1.75003 8.5 1.75003V0.250031C3.94365 0.250031 0.25 3.94368 0.25 8.50003H1.75ZM8.5 1.75003C12.2279 1.75003 15.25 4.77211 15.25 8.50003H16.75C16.75 3.94368 13.0563 0.250031 8.5 0.250031V1.75003ZM18.5303 17.4697L14.3428 13.2821L13.2821 14.3428L17.4697 18.5304L18.5303 17.4697Z'
        fill='white'
      />
    </svg>
  );
};

export const IconDot = (props: IIconProps) => {
  // props
  const { width, height, color } = props;
  return (
    <svg
      width={width || '8'}
      height={height || '8'}
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='4' cy='4' r='4' fill={color || '#FF7B42'} />
    </svg>
  );
};

export const IconLocation = (props: IIconProps) => {
  // props
  const { width, height, color } = props;
  return (
    <svg
      width={width || '18'}
      height={height || '20'}
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 9C17 13.4183 13.4183 17 9 19C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z'
        stroke={color || '#FF7B42'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z'
        stroke={color || '#FF7B42'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconDepatureTime = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '19'}
      height={height || '21'}
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 8V5C17 3.89543 16.1046 3 15 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H6M12 1V5M6 1V5M1 9H6M13 13.2V14.8875L13.9 15.9M17.5 15C17.5 17.4853 15.4853 19.5 13 19.5C10.5147 19.5 8.5 17.4853 8.5 15C8.5 12.5147 10.5147 10.5 13 10.5C15.4853 10.5 17.5 12.5147 17.5 15Z'
        stroke='#FF7B42'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconFlag = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '18'}
      height={height || '20'}
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.46967 13.4697C0.176777 13.7626 0.176777 14.2375 0.46967 14.5304C0.762563 14.8233 1.23744 14.8233 1.53033 14.5304L0.46967 13.4697ZM17 14L17.5303 14.5304C17.671 14.3897 17.75 14.1989 17.75 14H17ZM17 2.00003H17.75C17.75 1.69668 17.5673 1.42321 17.287 1.30712C17.0068 1.19104 16.6842 1.2552 16.4697 1.4697L17 2.00003ZM1 2.00003L0.46967 1.4697C0.329018 1.61035 0.25 1.80112 0.25 2.00003H1ZM0.25 19C0.25 19.4142 0.585786 19.75 1 19.75C1.41421 19.75 1.75 19.4142 1.75 19H0.25ZM1 14C1.53033 14.5304 1.52995 14.5307 1.52956 14.5311C1.52944 14.5312 1.52906 14.5316 1.52882 14.5319C1.52833 14.5324 1.52785 14.5328 1.52739 14.5333C1.52647 14.5342 1.5256 14.535 1.52479 14.5358C1.52317 14.5374 1.52178 14.5388 1.52062 14.5399C1.5183 14.5421 1.5169 14.5434 1.51647 14.5438C1.51559 14.5445 1.51856 14.5418 1.52561 14.536C1.53968 14.5244 1.57021 14.5004 1.61915 14.4678C1.71676 14.4027 1.88946 14.302 2.15354 14.1964C2.68039 13.9857 3.58454 13.75 5 13.75V12.25C3.41546 12.25 2.31961 12.5144 1.59646 12.8037C1.23554 12.948 0.970738 13.0973 0.7871 13.2197C0.695416 13.2809 0.624381 13.335 0.572048 13.3781C0.545893 13.3997 0.524446 13.4184 0.507458 13.4338C0.498965 13.4416 0.49159 13.4485 0.485302 13.4545C0.482158 13.4575 0.479286 13.4602 0.476682 13.4628C0.47538 13.464 0.474145 13.4653 0.472976 13.4664C0.472392 13.467 0.471824 13.4676 0.471273 13.4681C0.470998 13.4684 0.470597 13.4688 0.470459 13.4689C0.470062 13.4693 0.46967 13.4697 1 14ZM5 13.75C6.33552 13.75 7.45788 14.191 8.72146 14.6964C9.95788 15.191 11.3355 15.75 13 15.75V14.25C11.6645 14.25 10.5421 13.8091 9.27854 13.3037C8.04212 12.8091 6.66448 12.25 5 12.25V13.75ZM13 15.75C14.5845 15.75 15.6804 15.4857 16.4035 15.1964C16.7645 15.052 17.0293 14.9027 17.2129 14.7803C17.3046 14.7192 17.3756 14.665 17.428 14.6219C17.4541 14.6004 17.4756 14.5817 17.4925 14.5662C17.501 14.5585 17.5084 14.5516 17.5147 14.5456C17.5178 14.5426 17.5207 14.5398 17.5233 14.5373C17.5246 14.536 17.5259 14.5348 17.527 14.5336C17.5276 14.5331 17.5282 14.5325 17.5287 14.532C17.529 14.5317 17.5294 14.5313 17.5295 14.5311C17.5299 14.5308 17.5303 14.5304 17 14C16.4697 13.4697 16.4701 13.4693 16.4704 13.4689C16.4706 13.4688 16.4709 13.4684 16.4712 13.4682C16.4717 13.4677 16.4721 13.4672 16.4726 13.4668C16.4735 13.4659 16.4744 13.465 16.4752 13.4642C16.4768 13.4626 16.4782 13.4613 16.4794 13.4602C16.4817 13.458 16.4831 13.4567 16.4835 13.4563C16.4844 13.4555 16.4814 13.4582 16.4744 13.4641C16.4603 13.4756 16.4298 13.4996 16.3808 13.5322C16.2832 13.5973 16.1105 13.698 15.8465 13.8037C15.3196 14.0144 14.4155 14.25 13 14.25V15.75ZM17.75 14V2.00003H16.25V14H17.75ZM17 2.00003C16.4697 1.4697 16.4701 1.46932 16.4704 1.46894C16.4706 1.46881 16.4709 1.46844 16.4712 1.46819C16.4717 1.46771 16.4721 1.46723 16.4726 1.46678C16.4735 1.46587 16.4744 1.46501 16.4752 1.46422C16.4768 1.46264 16.4782 1.4613 16.4794 1.46019C16.4817 1.45798 16.4831 1.4567 16.4835 1.45631C16.4844 1.45551 16.4814 1.45825 16.4744 1.46405C16.4603 1.47564 16.4298 1.49962 16.3808 1.53224C16.2832 1.59732 16.1105 1.69804 15.8465 1.80367C15.3196 2.01441 14.4155 2.25003 13 2.25003V3.75003C14.5845 3.75003 15.6804 3.48565 16.4035 3.19639C16.7645 3.05202 17.0293 2.90274 17.2129 2.78032C17.3046 2.7192 17.3756 2.66505 17.428 2.62195C17.4541 2.60041 17.4756 2.58166 17.4925 2.56622C17.501 2.5585 17.5084 2.5516 17.5147 2.54561C17.5178 2.54261 17.5207 2.53983 17.5233 2.53729C17.5246 2.53602 17.5259 2.5348 17.527 2.53365C17.5276 2.53307 17.5282 2.53251 17.5287 2.53196C17.529 2.53169 17.5294 2.53129 17.5295 2.53115C17.5299 2.53075 17.5303 2.53036 17 2.00003ZM13 2.25003C11.6645 2.25003 10.5421 1.8091 9.27854 1.30367C8.04212 0.809102 6.66448 0.250031 5 0.250031V1.75003C6.33552 1.75003 7.45788 2.19096 8.72146 2.69639C9.95788 3.19096 11.3355 3.75003 13 3.75003V2.25003ZM5 0.250031C3.41546 0.250031 2.31961 0.51441 1.59646 0.803673C1.23554 0.948039 0.970738 1.09732 0.7871 1.21974C0.695416 1.28087 0.624381 1.33502 0.572048 1.37811C0.545893 1.39965 0.524446 1.4184 0.507458 1.43384C0.498965 1.44157 0.49159 1.44846 0.485302 1.45446C0.482158 1.45745 0.479286 1.46023 0.476682 1.46277C0.47538 1.46405 0.474145 1.46526 0.472976 1.46641C0.472392 1.46699 0.471824 1.46755 0.471273 1.4681C0.470998 1.46838 0.470597 1.46878 0.470459 1.46891C0.470062 1.46931 0.46967 1.4697 1 2.00003C1.53033 2.53036 1.52995 2.53075 1.52956 2.53113C1.52944 2.53125 1.52906 2.53162 1.52882 2.53187C1.52833 2.53235 1.52785 2.53283 1.52739 2.53328C1.52647 2.5342 1.5256 2.53505 1.52479 2.53584C1.52317 2.53742 1.52178 2.53876 1.52062 2.53987C1.5183 2.54208 1.5169 2.54336 1.51647 2.54376C1.51559 2.54455 1.51856 2.54181 1.52561 2.53601C1.53968 2.52442 1.57021 2.50045 1.61915 2.46782C1.71676 2.40274 1.88946 2.30202 2.15354 2.19639C2.68039 1.98565 3.58454 1.75003 5 1.75003V0.250031ZM0.25 2.00003V19H1.75V2.00003H0.25Z'
        fill='#FF7B42'
      />
    </svg>
  );
};

export const IconGuest = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '24'}
      height={height || '20'}
      viewBox='0 0 24 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23 19V17C23 14.7909 21.2091 13 19 13H18.5M15 9.00003C17.2091 9.00003 19 7.20917 19 5.00003C19 2.79089 17.2091 1.00003 15 1.00003M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19M13 5.00003C13 7.20917 11.2091 9.00003 9 9.00003C6.79086 9.00003 5 7.20917 5 5.00003C5 2.79089 6.79086 1.00003 9 1.00003C11.2091 1.00003 13 2.79089 13 5.00003Z'
        stroke='#FF7B42'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconFacebook = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.001 0.00195312C4.47895 0.00195312 0.00195312 4.47895 0.00195312 10.001C0.00195312 14.991 3.65795 19.127 8.43895 19.88V12.892H5.89895V10.001H8.43895V7.79796C8.43895 5.28996 9.93195 3.90695 12.215 3.90695C13.309 3.90695 14.455 4.10195 14.455 4.10195V6.56095H13.191C11.951 6.56095 11.563 7.33295 11.563 8.12395V9.99895H14.334L13.891 12.89H11.563V19.878C16.344 19.129 20 14.992 20 10.001C20 4.47895 15.523 0.00195312 10.001 0.00195312Z'
        fill='white'
      />
    </svg>
  );
};

export const IconInstagram = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.8129 0.264648C7.1453 0.264648 6.81285 0.277529 5.76887 0.321693C4.7206 0.373217 4.01153 0.535764 3.38588 0.778664C2.73107 1.02587 2.13805 1.41291 1.64816 1.91281C1.14687 2.40155 0.759612 2.9949 0.514015 3.65052C0.271115 4.27617 0.108569 4.98525 0.0570446 6.03352C0.00981413 7.07811 0 7.40995 0 10.0776C0 12.7452 0.012881 13.0776 0.0570446 14.1216C0.108569 15.1668 0.271115 15.8789 0.514015 16.5046C0.761221 17.1594 1.14826 17.7524 1.64816 18.2423C2.1369 18.7436 2.73025 19.1308 3.38588 19.3764C4.01153 19.6163 4.72366 19.7819 5.76887 19.8334C6.81346 19.8806 7.1453 19.8905 9.8129 19.8905C12.4805 19.8905 12.813 19.8776 13.8569 19.8334C14.9021 19.7819 15.6143 19.6157 16.2399 19.3764C16.8947 19.1292 17.4878 18.7422 17.9776 18.2423C18.4796 17.7541 18.8669 17.1606 19.1118 16.5046C19.3516 15.8789 19.5172 15.1668 19.5688 14.1216C19.616 13.077 19.6258 12.7452 19.6258 10.0776C19.6258 7.40995 19.6129 7.0775 19.5688 6.03352C19.5172 4.98831 19.351 4.27249 19.1118 3.65052C18.8646 2.99571 18.4775 2.4027 17.9776 1.91281C17.4894 1.41087 16.8959 1.02351 16.2399 0.778664C15.6143 0.535764 14.9021 0.373217 13.8569 0.321693C12.8123 0.274463 12.4805 0.264648 9.8129 0.264648ZM9.8129 2.03119C12.4327 2.03119 12.7455 2.04407 13.7809 2.08824C14.7359 2.13301 15.2561 2.29249 15.6014 2.42744C16.0283 2.58503 16.4147 2.83586 16.7325 3.16166C17.0577 3.47806 17.3076 3.86358 17.4636 4.28967C17.5986 4.635 17.7581 5.15515 17.8028 6.11019C17.847 7.14558 17.8599 7.45902 17.8599 10.0782C17.8599 12.6973 17.847 13.0108 17.7992 14.0461C17.7476 15.0012 17.5881 15.5213 17.4538 15.8667C17.268 16.3273 17.0606 16.6493 16.7184 16.9977C16.3996 17.3215 16.0134 17.5711 15.5873 17.7289C15.2463 17.8638 14.7187 18.0233 13.76 18.0681C12.7191 18.1123 12.4124 18.1251 9.78592 18.1251C7.15941 18.1251 6.85333 18.1123 5.81119 18.0644C4.85615 18.0129 4.32926 17.8534 3.98392 17.7191C3.51775 17.5332 3.19818 17.3259 2.85591 16.9836C2.51058 16.6383 2.29099 16.3095 2.12169 15.8526C1.98429 15.5115 1.82727 14.984 1.77636 14.0253C1.74139 12.9966 1.72483 12.6777 1.72483 10.0634C1.72483 7.45043 1.74139 7.13086 1.77636 6.08934C1.82727 5.13062 1.98429 4.60433 2.12169 4.26207C2.29099 3.79528 2.51119 3.47632 2.85591 3.13099C3.19757 2.78933 3.51775 2.56852 3.98392 2.39554C4.32926 2.26121 4.84327 2.10173 5.80199 2.05389C6.8429 2.01647 7.14959 2.00298 9.77242 2.00298L9.8129 2.03119ZM9.8129 5.04106C9.15127 5.04082 8.49608 5.17096 7.88477 5.42404C7.27345 5.67713 6.71801 6.04819 6.25016 6.51604C5.78232 6.98388 5.41125 7.53933 5.15817 8.15064C4.90509 8.76196 4.77495 9.41715 4.77519 10.0788C4.77495 10.7404 4.90509 11.3956 5.15817 12.0069C5.41125 12.6182 5.78232 13.1737 6.25016 13.6415C6.71801 14.1094 7.27345 14.4804 7.88477 14.7335C8.49608 14.9866 9.15127 15.1167 9.8129 15.1165C10.4745 15.1167 11.1297 14.9866 11.741 14.7335C12.3524 14.4804 12.9078 14.1094 13.3756 13.6415C13.8435 13.1737 14.2146 12.6182 14.4676 12.0069C14.7207 11.3956 14.8509 10.7404 14.8506 10.0788C14.8509 9.41715 14.7207 8.76196 14.4676 8.15064C14.2146 7.53933 13.8435 6.98388 13.3756 6.51604C12.9078 6.04819 12.3524 5.67713 11.741 5.42404C11.1297 5.17096 10.4745 5.04082 9.8129 5.04106V5.04106ZM9.8129 13.35C8.00465 13.35 6.54173 11.887 6.54173 10.0788C6.54173 8.27053 8.00465 6.80761 9.8129 6.80761C11.6212 6.80761 13.0841 8.27053 13.0841 10.0788C13.0841 11.887 11.6212 13.35 9.8129 13.35ZM16.2313 4.83987C16.231 5.15249 16.1066 5.4522 15.8854 5.67314C15.6643 5.89408 15.3644 6.01818 15.0518 6.01818C14.8972 6.01818 14.7442 5.98774 14.6014 5.92858C14.4585 5.86943 14.3288 5.78273 14.2195 5.67342C14.1102 5.56412 14.0235 5.43436 13.9643 5.29155C13.9052 5.14874 13.8747 4.99568 13.8747 4.8411C13.8747 4.68652 13.9052 4.53346 13.9643 4.39065C14.0235 4.24784 14.1102 4.11808 14.2195 4.00878C14.3288 3.89948 14.4585 3.81277 14.6014 3.75362C14.7442 3.69446 14.8972 3.66402 15.0518 3.66402C15.7002 3.66402 16.2313 4.19153 16.2313 4.83987V4.83987Z'
        fill='white'
      />
    </svg>
  );
};

export const IconTwitter = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '20'}
      height={height || '16'}
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.999 1.89525C19.4421 2.71111 18.7588 3.40659 17.9492 3.9817C17.9572 4.13594 17.9612 4.31027 17.9612 4.50469C17.9612 5.58493 17.8013 6.66649 17.4814 7.74934C17.1616 8.83221 16.673 9.86871 16.0158 10.8588C15.3585 11.849 14.5756 12.7261 13.667 13.4903C12.7584 14.2545 11.6662 14.8639 10.3905 15.3183C9.11474 15.7728 7.74749 16 6.28872 16C4.01208 16 1.91551 15.3947 -0.000976562 14.1841C0.339177 14.2214 0.665413 14.24 0.977732 14.24C2.87968 14.24 4.57843 13.6631 6.07398 12.5092C5.18718 12.4932 4.39299 12.2244 3.6914 11.7027C2.98981 11.181 2.50699 10.5144 2.24294 9.70286C2.50393 9.75182 2.76152 9.7763 3.01571 9.7763C3.3816 9.7763 3.74163 9.72931 4.0958 9.63531C3.14942 9.44864 2.36432 8.98443 1.74049 8.24267C1.11669 7.50092 0.80479 6.6448 0.80479 5.6743V5.62429C1.38568 5.94104 2.00529 6.10954 2.66362 6.12976C2.103 5.76167 1.65851 5.28168 1.33015 4.68978C1.00177 4.09787 0.837575 3.45733 0.837575 2.76814C0.837575 2.04129 1.02252 1.36444 1.3924 0.737616C2.42157 1.98142 3.66862 2.97551 5.13356 3.71989C6.59852 4.46427 8.17014 4.87768 9.84843 4.96011C9.77685 4.66632 9.74099 4.35973 9.74086 4.04035C9.74086 2.92519 10.1416 1.97301 10.943 1.18381C11.7444 0.394603 12.7113 0 13.8436 0C15.0291 0 16.0277 0.425125 16.8393 1.27538C17.7666 1.09448 18.6349 0.767285 19.4441 0.293792C19.1323 1.26009 18.5316 2.00551 17.6419 2.53008C18.4596 2.43438 19.2453 2.22277 19.999 1.89525H19.999Z'
        fill='white'
      />
    </svg>
  );
};

export const IconMail = (props: IIconProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width || '20'}
      height={height || '16'}
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.5 1.5L8.58579 8.58579C9.36683 9.36683 10.6332 9.36684 11.4142 8.58579L18.5 1.5M2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconLogo = (props: IIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width || '89'}
      height={height || '87'}
      viewBox='0 0 89 87'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M56.6423 41.4252C55.1218 42.5045 53.3337 43.1451 51.4734 43.277C51.0659 41.3326 49.9543 41.1289 48.1387 42.6474C47.8624 42.8909 47.6139 43.1642 47.3976 43.4622C47.1869 43.7442 47.0529 44.076 47.0086 44.4252C46.9932 44.5874 47.0347 44.75 47.1259 44.8851C47.2172 45.0202 47.3525 45.1194 47.5088 45.1659C48.4169 45.4252 49.3796 45.4252 50.2877 45.1659V45.4251C50.2877 49.9436 49.3985 52.8324 47.5088 54.1472C47.1652 54.4701 46.7113 54.6499 46.2397 54.6499C45.7681 54.6499 45.3143 54.4701 44.9707 54.1472C44.2025 53.4259 43.7 52.4669 43.5442 51.425C43.4176 50.3678 43.5122 49.2957 43.822 48.2769C43.9147 47.9807 44.0073 47.6658 44.137 47.351C44.3503 46.8291 44.5979 46.3219 44.878 45.8325C45.3124 45.0146 45.8409 44.2502 46.4528 43.5548C46.6316 43.3349 46.7296 43.0604 46.7307 42.777C46.7235 42.6676 46.6792 42.564 46.6051 42.4832C46.531 42.4023 46.4315 42.3492 46.3231 42.3326C46.1858 42.3102 46.0449 42.3301 45.9191 42.3896C45.7934 42.4491 45.6887 42.5455 45.6191 42.6659C44.5904 43.8403 43.7357 45.1562 43.081 46.5733C42.8586 47.0311 42.6788 47.5084 42.5437 47.9992C42.3029 48.4251 42.0435 48.814 41.7841 49.2214C41.7115 49.41 41.6183 49.5901 41.5062 49.7584C41.321 50.0917 41.1728 50.3325 41.0616 50.4991C40.9505 50.6658 40.8022 50.8325 40.617 51.0362C40.4732 51.2177 40.2893 51.3635 40.0797 51.4621C40.0025 51.5483 39.9017 51.61 39.7897 51.6397C39.6778 51.6693 39.5596 51.6655 39.4498 51.6287C39.2847 51.5958 39.1147 51.5958 38.9496 51.6287C38.8199 51.6287 38.6902 51.5361 38.542 51.351C38.3938 51.1658 38.2827 50.9991 38.2271 50.888C38.1423 50.7136 38.068 50.5343 38.0048 50.351C38.0048 50.0732 37.8751 49.8695 37.8566 49.7399C37.838 49.6103 37.8566 49.4251 37.7269 49.1473C37.6741 48.9728 37.643 48.7924 37.6342 48.6103C37.0414 46.1103 35.9483 45.7029 34.3551 47.4066C33.4626 48.4852 32.6631 49.6375 31.9652 50.851C31.8729 50.9638 31.7863 51.0813 31.7058 51.2028C30.0384 53.962 29.1121 54.6657 28.9454 53.2583C28.8897 53.0396 28.8897 52.8104 28.9454 52.5917C28.9926 52.3114 29.0735 52.0378 29.1862 51.7769C29.3159 51.4621 29.4271 51.1843 29.5012 50.9436C29.626 50.6302 29.7746 50.3269 29.9458 50.0362L30.3904 49.2584C30.5219 48.9899 30.6704 48.7301 30.8351 48.4806C31.0389 48.1103 31.1685 47.9251 31.2056 47.9251C31.7023 47.0336 32.2724 46.185 32.91 45.3881C33.06 45.1822 33.2413 45.001 33.4473 44.8511C33.6658 44.6743 33.9093 44.5308 34.1698 44.4252C34.2746 44.3668 34.3926 44.3361 34.5125 44.3361C34.6325 44.3361 34.7505 44.3668 34.8553 44.4252C34.9689 44.5095 35.0579 44.6226 35.1133 44.7528C35.1686 44.883 35.1883 45.0256 35.1702 45.1659C35.1702 45.5918 35.4667 45.6844 35.9298 45.4622C36.1499 45.3978 36.343 45.2637 36.4801 45.0799C36.6171 44.8962 36.6906 44.6729 36.6894 44.4437C36.6551 44.1124 36.532 43.7965 36.3331 43.5292C36.1342 43.262 35.8669 43.0533 35.5593 42.9252C35.272 42.7803 34.9547 42.7048 34.633 42.7048C34.3112 42.7048 33.9939 42.7803 33.7067 42.9252C32.521 43.4622 31.15 45.2029 29.6123 48.1473L29.4085 48.5547C28.5211 50.3302 27.9267 52.2376 27.6485 54.2028C27.5188 56.0546 28.2599 56.4064 29.8532 55.4065C30.44 55.0476 30.9552 54.5829 31.3723 54.0361C31.9118 53.3355 32.4128 52.606 32.873 51.851C33.2122 51.2454 33.5832 50.6581 33.9845 50.0917C34.034 49.9416 34.1025 49.7985 34.1883 49.6658L34.6144 49.0177C34.738 48.8179 34.8742 48.6262 35.022 48.4436C35.2073 48.1473 35.2073 48.1473 35.3555 48.1473C35.4203 48.1375 35.4866 48.1443 35.5482 48.1669C35.6097 48.1896 35.6645 48.2274 35.7075 48.2769C35.814 48.3626 35.8916 48.479 35.9298 48.6103L36.078 49.0732C36.15 49.2302 36.1879 49.4006 36.1892 49.5732C36.1803 49.7336 36.1803 49.8943 36.1892 50.0547C36.1892 50.2214 36.1892 50.3325 36.1892 50.3695C36.2342 50.9613 36.4025 51.5372 36.6833 52.0602C36.964 52.5832 37.3511 53.0418 37.8195 53.4065C39.0608 54.0917 40.4502 53.4065 41.9509 51.388C41.9149 52.1194 42.0332 52.8502 42.2981 53.5329C42.563 54.2156 42.9686 54.835 43.4886 55.3509C43.8066 55.7429 44.2307 56.0351 44.7103 56.1927C45.1899 56.3503 45.7048 56.3667 46.1934 56.2398C47.1915 55.9553 48.09 55.3972 48.7871 54.6287C49.559 53.823 50.1746 52.8811 50.6027 51.851C51.3023 49.6229 51.64 47.2971 51.6031 44.9622H52.1033C53.9505 44.5922 55.6799 43.7787 57.1425 42.5919C57.3263 42.5034 57.4723 42.352 57.5539 42.1651C57.6354 41.9782 57.6473 41.7682 57.5871 41.5734C57.4389 41.1289 57.1055 41.0734 56.6423 41.4252ZM48.4536 44.1289L48.8427 43.7215C48.9036 43.6242 48.9857 43.542 49.0829 43.481C49.1802 43.42 49.29 43.3818 49.4041 43.3693C49.5182 43.3569 49.6337 43.3704 49.7418 43.4089C49.8499 43.4475 49.9479 43.51 50.0284 43.5918C49.7422 43.5524 49.4507 43.5805 49.1773 43.6737C48.9039 43.767 48.6561 43.9228 48.4536 44.1289Z'
        fill={color || 'white'}
      />
      <path
        d='M29.6495 43.4994C29.5246 43.4846 29.3981 43.5044 29.2837 43.5567C29.1693 43.6089 29.0715 43.6916 29.0011 43.7957C27.6919 45.4253 26.2653 47.2772 24.7215 49.3512C24.8882 46.3512 24.9994 43.3883 25.092 40.4625C25.092 40.1106 24.9438 39.9625 24.6474 40.0551C24.4433 40.0667 24.2465 40.1354 24.0795 40.2532C23.9125 40.3711 23.7819 40.5334 23.7025 40.7217C22.4743 43.9144 20.8895 46.9583 18.9783 49.7956C18.6636 50.1531 18.3296 50.4931 17.9779 50.8141C17.6762 51.1032 17.3247 51.3353 16.9404 51.4993C16.793 51.5731 16.6278 51.6035 16.4638 51.5871C16.2998 51.5707 16.1439 51.5082 16.0141 51.4067C15.7225 51.0768 15.5468 50.6606 15.5139 50.2215C15.5562 49.2276 15.7955 48.252 16.2179 47.3512C16.3846 46.8698 16.5513 46.4253 16.7181 45.9994C16.8848 45.5735 17.1812 44.9253 17.6259 44.0365C18.0705 43.1476 18.441 42.6661 18.756 42.592C18.9491 42.5553 19.1478 42.5594 19.3392 42.604C19.5307 42.6487 19.7106 42.7329 19.8676 42.8513C19.9689 42.9098 20.084 42.9406 20.201 42.9406C20.3181 42.9406 20.4331 42.9098 20.5345 42.8513C20.781 42.7217 20.9768 42.513 21.0903 42.2587C21.1686 42.1511 21.2108 42.0214 21.2108 41.8884C21.2108 41.7553 21.1686 41.6256 21.0903 41.518C20.9549 41.311 20.7755 41.1364 20.565 41.0065C20.3545 40.8766 20.118 40.7946 19.8722 40.7664C19.6264 40.7381 19.3775 40.7642 19.1429 40.8429C18.9084 40.9216 18.6941 41.0509 18.5151 41.2217C16.7445 42.7238 15.4557 44.714 14.8099 46.9438C13.7909 49.7586 13.6056 51.703 14.2911 52.7956C14.1244 53.3141 13.9021 53.5733 13.6797 53.5919C13.124 53.5919 12.2162 52.2956 10.9008 49.4993C10.5673 48.8327 10.345 48.3512 10.2153 48.0549C9.94547 47.6707 9.62799 47.3223 9.27047 47.0179C8.96396 46.5947 8.53828 46.2724 8.04773 46.092C7.74329 45.9956 7.42272 45.9607 7.10467 45.9893C6.78661 46.0179 6.47742 46.1095 6.1951 46.2586C5.55546 46.6243 5.03945 47.1724 4.71299 47.8327C4.30541 48.5981 3.99046 49.2154 3.76814 49.6845C3.56435 50.1845 3.36056 50.7956 3.13824 51.5363C2.49001 53.1392 1.97569 54.793 1.60056 56.4807C1.58214 56.44 1.57262 56.3958 1.57262 56.3511C1.57262 56.3064 1.58214 56.2622 1.60056 56.2214C1.60056 55.9745 1.60056 55.5671 1.60056 54.9992C1.60056 54.4313 1.60056 54.0425 1.60056 53.8326C1.64571 50.6897 1.89946 47.5532 2.36014 44.4439V44.2402C2.36014 43.9068 2.17487 43.7772 1.80435 43.8698C1.58498 43.8914 1.37889 43.9848 1.21808 44.1355C1.05727 44.2861 0.950758 44.4857 0.91508 44.7031C0.25189 48.3872 -0.0521313 52.1269 0.00728829 55.8696C-0.0149068 56.6315 0.198593 57.3816 0.618658 58.0177C0.685669 58.1179 0.773631 58.2024 0.876477 58.2653C0.979323 58.3283 1.0946 58.3682 1.21437 58.3822C1.33413 58.3963 1.45552 58.3843 1.57018 58.3469C1.68483 58.3096 1.79 58.2478 1.87845 58.1658C2.48851 57.6539 2.91728 56.9591 3.10119 56.1844C3.23088 55.814 3.5273 54.777 4.00898 53.1104C4.3611 51.842 4.81333 50.6036 5.36141 49.4067C5.48989 49.0883 5.65133 48.7842 5.84309 48.4994C5.98164 48.2686 6.16419 48.0672 6.38036 47.9068C6.47083 47.8218 6.57993 47.7591 6.69894 47.7237C6.81796 47.6883 6.9436 47.6813 7.06583 47.7031C7.37907 47.7575 7.66559 47.9138 7.88099 48.1475C8.71678 49.1573 9.34622 50.3213 9.73363 51.5734C9.79253 51.7877 9.87975 51.9932 9.993 52.1845C10.1597 52.5548 10.2709 52.7771 10.345 52.9252C10.4191 53.0733 10.5117 53.2956 10.6785 53.6104C10.8452 53.9252 10.9934 54.1659 11.1231 54.3696L11.5677 54.9622C11.719 55.1582 11.9079 55.3219 12.1235 55.4437C12.3333 55.5401 12.5501 55.6206 12.772 55.6844C12.993 55.7667 13.2364 55.7667 13.4574 55.6844L13.9947 55.4622C14.1846 55.3645 14.3447 55.2174 14.4579 55.0363L14.8284 54.4437C14.9367 54.2411 15.0296 54.0306 15.1063 53.8141C15.3489 53.9037 15.6077 53.9416 15.8659 53.9252C16.4759 53.87 17.0529 53.6237 17.5147 53.2215C18.1108 52.7397 18.6513 52.1931 19.1265 51.5919C19.7032 50.8656 20.2353 50.1049 20.7198 49.3142C21.2756 48.4253 21.7572 47.592 22.1648 46.7957C22.5724 45.9994 22.9985 45.2031 23.369 44.3513C23.2764 46.7031 23.1838 49.0734 23.0541 51.4623C21.2756 54.0795 19.5835 56.7338 17.9779 59.4251L15.9955 62.8139C15.4768 63.7398 14.8284 64.925 14.1429 66.425C13.4329 67.7327 12.8139 69.0877 12.2903 70.4805C11.8827 71.6841 11.4936 72.9989 11.1231 74.3878C10.778 75.7053 10.6097 77.0629 10.6229 78.4248C10.628 79.6525 10.8539 80.8694 11.2898 82.0173C11.6587 83.392 12.4412 84.6203 13.5315 85.5357C13.9584 85.9019 14.4723 86.1521 15.0239 86.2624C15.5754 86.3726 16.1461 86.3392 16.681 86.1654C17.3332 85.8849 17.921 85.4741 18.4085 84.9582C18.896 84.4423 19.2727 83.8322 19.5156 83.1654C20.1036 81.975 20.5871 80.7358 20.9606 79.4618C21.3867 78.0729 21.7202 76.8692 21.9425 75.7581C22.1648 74.647 22.4057 73.3137 22.628 71.5915C22.8503 69.8693 23.017 68.6101 23.1097 67.8879C23.2023 67.1657 23.3135 65.7398 23.4802 63.7954C23.6469 61.851 23.7581 60.5917 23.7951 60.0917C24.0545 57.277 24.2768 54.5363 24.4991 51.6845C26.253 49.2154 27.9945 46.8883 29.7236 44.7031C29.8166 44.6017 29.8864 44.4813 29.928 44.3501C29.9696 44.219 29.982 44.0803 29.9644 43.9439C29.9687 43.8454 29.9401 43.7482 29.883 43.6678C29.826 43.5873 29.7439 43.5281 29.6495 43.4994ZM20.3863 75.3878C20.3863 75.5174 20.3863 75.9618 20.1825 76.7211C19.9787 77.4803 19.9231 77.9988 19.8676 78.2766C19.812 78.5544 19.6823 78.9988 19.5526 79.6284C19.4404 80.1384 19.2919 80.6397 19.108 81.1284L18.5707 82.4247C18.3662 82.8784 18.131 83.3177 17.8667 83.7395C17.2924 84.6839 16.6625 85.0728 16.0141 84.9246C15.3449 84.7477 14.7445 84.3735 14.2911 83.8506C13.0241 82.4926 12.2877 80.7247 12.2162 78.8692C12.1042 77.8166 12.1042 76.7552 12.2162 75.7026C12.3761 74.549 12.6491 73.4139 13.0313 72.3137C13.4574 71.036 13.865 69.9434 14.2541 68.999C14.6431 68.0546 15.1989 66.925 15.8659 65.6472C16.5328 64.3694 17.0886 63.3509 17.4962 62.6473L19.0709 59.8695C20.2196 58.0177 21.5164 55.9992 22.98 53.8326C22.5758 61.0655 21.7095 68.2653 20.3863 75.3878Z'
        fill={color || 'white'}
      />
      <path
        d='M88.9339 46.4067C88.9339 46.4067 88.9339 46.6845 88.7487 46.9622C88.6999 47.1636 88.638 47.3615 88.5634 47.5548L88.3411 48.1289C88.2299 48.4252 88.1558 48.6474 88.0817 48.7955C88.0076 48.9437 87.9335 49.1103 87.8409 49.3511C87.7521 49.5568 87.6468 49.755 87.5259 49.9437L87.1369 50.4437C87.0297 50.6167 86.8839 50.7625 86.7108 50.8696C86.5577 50.9911 86.3968 51.1025 86.2291 51.2029C86.0583 51.3131 85.8705 51.3944 85.6733 51.4436C85.309 51.5187 84.9327 51.5128 84.5709 51.4264C84.2091 51.34 83.8708 51.1752 83.5798 50.9436C82.924 50.4351 82.3708 49.8067 81.9495 49.0918C80.8589 46.8276 80.1754 44.3892 79.9301 41.8883L79.2447 44.5734C79.2447 44.7092 79.1705 45.0055 79.0223 45.4623C78.9112 45.8882 78.8371 46.24 78.763 46.4808C78.6889 46.7215 78.5962 47.0733 78.448 47.5363C78.3312 47.9134 78.1952 48.2842 78.0404 48.6474L77.5958 49.6844C77.4536 50.0269 77.2799 50.3554 77.0771 50.6659C76.882 50.9487 76.6717 51.2207 76.4472 51.4807C76.2328 51.7262 75.9831 51.9384 75.7061 52.1103C75.2944 52.4307 74.7824 52.5947 74.2611 52.5732C74.0596 52.5553 73.8638 52.4969 73.6856 52.4014C73.5073 52.3059 73.3501 52.1754 73.2236 52.0177C72.9173 51.599 72.6623 51.1452 72.464 50.6659C72.2252 50.0703 72.0573 49.4488 71.9638 48.8141L71.6859 46.7956C71.6859 46.0919 71.5562 45.4252 71.5192 44.7771C71.4821 44.129 71.5192 43.5549 71.5192 43.0549V41.9253C71.5254 41.6857 71.6078 41.4542 71.7543 41.2645C71.9008 41.0747 72.104 40.9365 72.3343 40.8697C72.7604 40.6846 72.9642 40.8697 72.9642 41.2401C72.9193 42.911 73.006 44.5828 73.2236 46.24C73.5571 49.5548 74.187 51.0548 75.0762 50.7585C75.5058 50.4714 75.8511 50.0751 76.0766 49.6103L76.6139 48.4437L77.1141 47.3141C77.2623 46.9808 77.4105 46.5363 77.5773 46.0178L77.9663 44.8141C77.9663 44.5178 78.1516 44.0549 78.2813 43.4808C78.411 42.9067 78.5036 42.4438 78.5592 42.2401C78.6794 41.7956 78.7722 41.3441 78.8371 40.8883C78.9606 40.2216 79.0347 39.8142 79.0594 39.6661C79.0594 39.4994 79.152 39.0735 79.2817 38.3328C79.3653 37.9227 79.4271 37.5086 79.467 37.092C79.5159 36.8769 79.6257 36.6804 79.7834 36.526C79.9412 36.3717 80.14 36.266 80.3562 36.2217C80.7268 36.2217 80.9305 36.2217 80.9305 36.7032C81.1023 38.8656 81.393 41.017 81.8013 43.1475C82.0591 44.8867 82.5906 46.5742 83.376 48.1474C84.043 49.277 84.6729 49.8511 85.2287 49.9992C85.513 50.0226 85.7976 49.9579 86.0438 49.814C86.3283 49.6673 86.5515 49.4246 86.6737 49.1289C86.8473 48.8186 86.9841 48.4893 87.0813 48.1474C87.2042 47.8137 87.3093 47.4737 87.3962 47.1289C87.5021 46.8592 87.5828 46.5802 87.6371 46.2956C87.6862 46.076 87.8167 45.8832 88.0023 45.7561C88.188 45.6289 88.415 45.5769 88.6375 45.6104C88.9339 45.7586 89.1007 45.9993 88.9339 46.4067Z'
        fill={color || 'white'}
      />
      <path
        d='M76.6323 4.03706C76.6323 3.79633 76.6323 3.48152 76.6323 3.12967C76.6258 2.817 76.5823 2.5062 76.5027 2.20376C76.4368 1.93417 76.3564 1.66835 76.2618 1.40748C76.1533 1.15198 75.9886 0.924149 75.7801 0.740824C75.6161 0.573124 75.4289 0.429703 75.2243 0.314906C75.0047 0.13989 74.7387 0.0326672 74.459 0.00635613C74.1794 -0.019955 73.8981 0.0357862 73.6496 0.16676C73.1177 0.417618 72.6443 0.777206 72.2601 1.2223C71.854 1.67108 71.5055 2.16874 71.2226 2.70375C71.0188 3.07412 70.8336 3.463 70.6668 3.85188C70.4831 4.27501 70.3223 4.70772 70.1852 5.14815C70.0369 5.61111 69.9258 6.01851 69.8146 6.37036C69.6823 6.80789 69.5771 7.25318 69.4997 7.70367C69.3885 8.25921 69.3144 8.68513 69.2403 8.9629C69.1662 9.24068 69.1106 9.70363 69.018 10.3333C68.9254 10.9629 68.8698 11.3518 68.8327 11.5925C68.7957 11.8332 68.7401 12.2591 68.6475 12.9258C68.5848 13.3123 68.5415 13.7016 68.5178 14.0924C67.8879 18.9812 67.4247 25.2034 67.1283 32.8514C67.1283 33.7217 67.1283 35.4254 67.0171 37.9439C65.7944 40.8327 64.6272 43.3327 63.5157 45.3512C62.4685 47.3411 61.1463 49.1739 59.5881 50.7955C57.5687 52.8695 56.0866 53.6658 55.1788 53.1658C54.5859 52.8325 54.9194 51.314 56.1792 48.4622C56.9436 46.7217 58.0601 45.158 59.4584 43.8697C60.0156 43.3147 60.726 42.9389 61.4985 42.7904C62.2709 42.6419 63.0702 42.7276 63.7936 43.0364C64.09 43.129 64.3864 43.0364 64.6828 42.6105C64.9792 42.1845 65.146 41.7586 64.6828 41.5734C63.9832 41.3015 63.2343 41.1791 62.4844 41.2142C61.7345 41.2493 61.0003 41.441 60.3291 41.7771C58.9235 42.4946 57.7246 43.5591 56.8462 44.8697C55.8647 46.2743 55.0677 47.7991 54.4748 49.4066C53.9314 50.8522 53.5946 52.367 53.4744 53.9066C53.4744 54.2399 53.4744 54.4436 53.7152 54.4621C54.3178 54.6288 54.9434 54.6976 55.5678 54.6658C56.1482 54.6225 56.7177 54.4849 57.2537 54.2584C57.8109 54.0307 58.3394 53.7386 58.8285 53.3881C59.3788 53.0032 59.8879 52.5626 60.3476 52.0733C60.8479 51.5548 61.311 51.0177 61.7371 50.4992C62.1632 49.9807 62.5893 49.4066 63.0154 48.74C63.4416 48.0733 63.8491 47.4252 64.1826 46.8882C64.5161 46.3511 64.8866 45.6289 65.2571 44.9252C65.6277 44.2215 65.9426 43.5919 66.202 43.0734C66.4614 42.5549 66.7207 41.9438 67.0171 41.2216C66.943 44.9252 66.943 52.0794 67.0171 62.6842C67.0171 63.1286 67.2395 63.2397 67.7026 63.0175C67.9167 62.955 68.1055 62.8264 68.2419 62.6501C68.3784 62.4738 68.4555 62.2589 68.4622 62.0361C68.4622 60.3879 68.4622 58.3324 68.4622 56.1287C68.4622 53.9251 68.4622 51.8325 68.4622 50.2029C68.4622 48.5733 68.4622 46.4993 68.4622 44.2401V38.2772C72.7956 28.491 75.505 18.0645 76.4841 7.40737C76.4841 7.40737 76.4841 7.07405 76.4841 6.68516C76.5021 6.4015 76.5021 6.11699 76.4841 5.83333C76.4841 5.66666 76.4841 5.35186 76.4841 4.94445C76.5661 4.64822 76.6158 4.34399 76.6323 4.03706ZM75.1873 5.88888C75.1873 6.49998 75.1873 6.94442 75.1873 7.25923C75.1873 7.57404 75.1873 7.9444 75.0576 8.38884V8.66661C74.0038 17.6274 71.7416 26.4045 68.3325 34.7588C68.4184 26.3826 69.143 18.0252 70.5001 9.75919C70.5587 9.54649 70.602 9.3299 70.6298 9.11105C70.6298 8.79624 70.7224 8.49995 70.778 8.20366C70.8336 7.90737 70.9262 7.537 71.0003 7.05553C71.0744 6.57406 71.1856 6.18517 71.2782 5.77777L71.6302 4.57409C71.7497 4.17486 71.8983 3.78493 72.0748 3.40744C72.2259 3.09062 72.3929 2.78159 72.5751 2.48153C72.7204 2.23387 72.916 2.01939 73.1494 1.85192C73.2349 1.77677 73.3349 1.71992 73.4432 1.68489C73.5516 1.64985 73.6659 1.63737 73.7793 1.64822C73.9237 1.61651 74.0743 1.62766 74.2126 1.68029C74.3508 1.73293 74.4706 1.82476 74.5574 1.94451C74.7813 2.25571 74.9217 2.61914 74.965 3.00004C74.965 3.463 75.1132 3.92595 75.1687 4.31484C75.2027 4.8141 75.2088 5.31486 75.1873 5.81481V5.88888Z'
        fill={color || 'white'}
      />
      <path
        d='M31.776 80H33.888L37.648 68.8H35.344L32.832 77.088L30.32 68.8H28.016L31.776 80ZM38.6125 69.616C38.6125 70.336 39.1405 70.896 39.8925 70.896C40.6445 70.896 41.1725 70.336 41.1725 69.616C41.1725 68.896 40.6445 68.336 39.8925 68.336C39.1405 68.336 38.6125 68.896 38.6125 69.616ZM40.8845 80V71.936H38.9005V80H40.8845ZM42.7974 75.968C42.7974 77.872 43.9014 80.128 46.6694 80.128C48.6054 80.128 49.7094 79.2 50.3334 77.776L48.7334 77.184C48.2374 78.016 47.6934 78.432 46.7814 78.432C45.5654 78.432 44.9254 77.504 44.8774 76.608H50.4294V75.792C50.4294 74.048 49.3574 71.808 46.6694 71.808C43.9014 71.808 42.7974 74.064 42.7974 75.968ZM44.9254 75.04C45.0534 74.288 45.6774 73.504 46.6694 73.504C47.7254 73.504 48.2374 74.24 48.3974 75.04H44.9254ZM52.7548 73.632V77.152C52.7548 79.152 53.8748 80.128 55.7148 80.128C56.1468 80.128 56.5788 80.048 57.0268 79.84L56.5628 78.24C56.2908 78.384 56.0668 78.432 55.7948 78.432C55.1068 78.432 54.7388 78.128 54.7388 77.12V73.632H56.8668V71.936H54.7388V68.672L52.7548 69.92V71.936H51.5068V73.632H52.7548ZM60.7484 80V76.784C60.7484 74.672 61.6284 73.504 62.5884 73.504C63.2764 73.504 63.7404 73.872 63.7404 74.832V80H65.7244V74.24C65.7244 72.624 64.7004 71.808 63.2444 71.808C62.2044 71.808 61.3404 72.384 60.7484 73.232V71.936H58.7644V80H60.7484ZM67.483 77.68C67.483 79.28 68.571 80.128 69.931 80.128C71.083 80.128 71.851 79.664 72.411 78.976L72.619 80H74.251V75.184C74.251 72.624 72.763 71.808 70.859 71.808C69.195 71.808 68.043 72.704 67.787 74.048L69.467 74.432C69.723 73.68 70.299 73.504 70.859 73.504C71.579 73.504 72.267 73.792 72.267 74.688V75.04H70.923C68.875 75.04 67.483 76.08 67.483 77.68ZM69.563 77.648C69.563 76.928 70.091 76.608 70.939 76.608H72.267V76.768C72.267 77.808 71.291 78.432 70.395 78.432C69.835 78.432 69.563 78.032 69.563 77.648ZM78.2484 80V77.04C78.2484 74.624 79.0164 73.504 79.9924 73.504C80.5844 73.504 80.9844 73.808 80.9844 74.624V80H82.9684V76.864C82.9684 74.576 83.7524 73.504 84.7124 73.504C85.3044 73.504 85.7044 73.808 85.7044 74.624V80H87.6884V74.288C87.6884 72.736 86.8084 71.808 85.2884 71.808C84.2804 71.808 83.4004 72.432 82.8244 73.472C82.4564 72.304 81.5764 71.808 80.5684 71.808C79.5284 71.808 78.8404 72.336 78.2484 73.232V71.936H76.2644V80H78.2484Z'
        fill={color || 'white'}
      />
    </svg>
  );
};

export const IconDoubleQuotes = (props: IIconProps) => {
  // props
  const { width, height } = props;
  return (
    <svg
      width={width || '31'}
      height={height || '20'}
      viewBox='0 0 31 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.125 12.9375C29.125 9.79638 26.5786 7.25 23.4375 7.25L17.75 1.5625V12.9375C17.75 16.0786 20.2964 18.625 23.4375 18.625C26.5786 18.625 29.125 16.0786 29.125 12.9375Z'
        stroke='#FF7B42'
        strokeWidth='2'
        strokeLinejoin='round'
      />
      <path
        d='M12.875 12.9375C12.875 9.79638 10.3286 7.25 7.1875 7.25L1.5 1.5625V12.9375C1.5 16.0786 4.04638 18.625 7.1875 18.625C10.3286 18.625 12.875 16.0786 12.875 12.9375Z'
        stroke='#FF7B42'
        strokeWidth='2'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconArrow = (props: IIconProps) => {
  // props
  const { width, height, color } = props;
  return (
    <svg
      width={width || '18'}
      height={height || '14'}
      viewBox='0 0 18 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 7L1 7M17 7L11 13M17 7L11 0.999999'
        stroke={color || '#636567'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const IconPrevPage = (props: IIconProps) => {
  // props
  const { width, height, color } = props;
  return (
    <svg
      width={width || '15'}
      height={height || '9'}
      viewBox='0 0 15 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.08093 7.89839L2.21337 5.0308L14.677 5.0308L14.677 4.07492L2.21343 4.07492L5.08093 1.20739L4.40503 0.531494L0.383666 4.55289L4.40503 8.57429L5.08093 7.89839Z'
        fill={color || 'black'}
      />
    </svg>
  );
};

export const IconNextPage = (props: IIconProps) => {
  // props
  const { width, height, color } = props;
  return (
    <svg
      width={width || '16'}
      height={height || '9'}
      viewBox='0 0 16 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.3428 1.20732L13.2104 4.07491L0.746766 4.07491L0.746766 5.03079L13.2103 5.03079L10.3428 7.89832L11.0187 8.57422L15.0401 4.55282L11.0187 0.531426L10.3428 1.20732Z'
        fill={color || 'black'}
      />
    </svg>
  );
};

export const IconStar = (props: IIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width || '16'}
      height={height || '15'}
      viewBox='0 0 16 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 0L10.3982 4.69921L15.6085 5.52786L11.8803 9.26079L12.7023 14.4721L8 12.08L3.29772 14.4721L4.11969 9.26079L0.391548 5.52786L5.60184 4.69921L8 0Z'
        fill={color || 'white'}
      />
    </svg>
  );
};
