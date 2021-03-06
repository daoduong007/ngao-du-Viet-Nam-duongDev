import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const BodySubscribeMail = () => {
  const [mailInput, setMailInput] = useState<string>('');

  const handleChange = (e) => {
    setMailInput(e.target.value);
  };

  const handleClick = () => {
    setMailInput('');
  };
  return (
    <StyledBodySubscribeMail>
      <div className='body-subscribe-mail-title'>
        <p>
          Leave us an email, to get <span>the latest deals</span>
        </p>
      </div>
      <div className='body-input-mail'>
        <Input
          placeholder='example@gmail.com'
          prefix={<MailOutlined />}
          value={mailInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type='primary' onClick={handleClick}>
          Send
        </Button>
      </div>
    </StyledBodySubscribeMail>
  );
};
const StyledBodySubscribeMail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin: 150px 0;

  .body-subscribe-mail-title {
    width: 39%;
    p {
      margin: 0;

      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;
      /* or 40px */
      /* tieu de */
      color: #1c1c1e;
      text-align: left;
      span {
        color: #ff7b42;
      }
    }
  }
  .body-input-mail {
    width: 40%;
    height: 48px;

    display: flex;
    flex-direction: row;

    .ant-btn {
      &:hover {
        transform: scale(1.05, 1.05);
      }
      height: 48px;
      padding: 13px 33px 13px 33px;
      margin-left: 21px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: #ffffff;
    }
    .ant-btn-primary {
      border-color: #1c1c1e;
      background: #1c1c1e;
    }
    .ant-input-affix-wrapper {
      border: 1px solid #636567;
      padding: 0px;
      padding-right: 10px;
      box-sizing: border-box;
    }
    .anticon > * {
      color: #ff7b42;
      font-size: 16px;
    }
    svg {
      margin: 20px 15px 16px 20px;
    }
    //remove outline input ant design
    .ant-input-affix-wrapper-focused {
      box-shadow: none !important;
      border-color: #ff7b42;
    }
  }

  @media (max-width: 1200px) {
    margin: 50px 0;
    .body-subscribe-mail-title {
      width: 100%;
      p {
        font-size: 30px;
      }
    }
    .body-input-mail {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    margin: 30px 0;
    flex-direction: column;
    .body-subscribe-mail-title {
      margin-bottom: 20px;
      p {
        text-align: center;
        font-size: 25px;
      }
    }
  }
`;
