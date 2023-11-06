import { Layout } from "antd";
import styled from "styled-components";

export const ContainerLayout = styled(Layout)<{ colorBgContainer: string; collapsed: boolean; isRtl: boolean; }>(({ colorBgContainer, collapsed, isRtl }) => `
#components-layout-demo-responsive .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .sider{
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: ${isRtl ? 'none' : 0};
    right : ${isRtl ? 0 : 'none'}; 
    top: 0;
    bottom: 0;
    background: ${colorBgContainer};
    transition:0.6s;
    .ant-layout-sider-trigger{
    transition:0.6s;

    }
  }

  .main-logo{
    background: #ddd;
    color :red;
    margin:14px;
    height:35px;
    display:flex;
    flex-direction :row ;
    align-items : center;
    justify-content : center ;
    border-radius :6px;
    white-space: nowrap; 
  }

  .site{
    margin : ${isRtl ? collapsed ? '0 100px 0 0' : '0 220px 0 0' : collapsed ? '0 0 0 100px' : '0 0 0 220px'};
    transition:0.6s;
  }

  .header {
    padding: 0; 
    background: ${colorBgContainer} ;
    display:flex ;
    flex-direction:row ; 
    justify-content :space-between ; 
    align-items :center ;   
    padding : 0 10px;

    .inner-header{
        display:flex ;
        flex-direction:row ; 
        gap:10px;  
    }

    .btn-header{
        font-size: 16px;
        width: 64px;
        height: 64px;
    }
  }

  .content{
    margin: 24px 0px 0;
    overflow: initial;

    .inner-content {
        padding: 24px;
        min-height: 83vh;
        background: ${colorBgContainer} ;
    }

  }

  .footer {
    text-align: center;
  }

`)