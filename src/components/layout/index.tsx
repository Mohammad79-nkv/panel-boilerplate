// layout 
import React, { useState , memo} from 'react';
import { Layout, Menu, theme, Button } from 'antd';
import styled from 'styled-components';
import { LazyMotion, domAnimation } from "framer-motion"
import { Outlet } from 'react-router-dom';
// icons
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined
} from '@ant-design/icons';
//custom 
import ContainerAnimation from './../pure-elements/container-animation';
// test 
import { CiLogout, CiUser } from 'react-icons/ci'
import { ChangeLanguage } from './../index';
// import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import {useAppSelector} from './../../redux/hooks';
import {RootState} from './../../redux/store';
import {LangStatus} from './../../redux/slices/change-lang'
import {useEffect} from 'react'

import { APP_ROUTES } from '@/enum/app-route.enum';
import { ContainerLayout } from './layout.style';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const MainLayout = () => {


    const items: MenuProps['items'] = [
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),

        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),

        { type: 'divider' },

        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),

        getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
        getItem(
            <Link 
                to={APP_ROUTES.LOGIN}>
                Login
            </Link>,
            'login',
            <LinkOutlined />,
        ),
        getItem(
            <Link
                to={APP_ROUTES.ROOT} >
                Dashboard
            </Link>,
            'dashboard',
            <LinkOutlined />,
        ),
        getItem(
            <Link
                to={APP_ROUTES.TEST} >
                Test
            </Link>,
            'test',
            <LinkOutlined />,
        ),
    ];


    

    const [collapsed, setCollapsed] = useState<boolean>(false);
    // const { i18n } = useTranslation();
    // const isRtl = i18n.language === "fa-IR";
    const {lang} = useAppSelector((state: RootState): LangStatus => state.lang)
    const {
        token: { colorBgBase },
    } = theme.useToken();

    useEffect(() => {
      console.log('lang', lang)
    }, [lang])

    useEffect(() => {
        console.log('rendereerrrrrrrrrrrrr')
    })


    

    return (
        <ContainerLayout colorBgContainer={colorBgBase} collapsed={collapsed} isRtl={lang}>
            <Sider
                collapsible
                collapsed={collapsed && collapsed}
                className={'sider'}
                onCollapse={(value) => setCollapsed(value)}
            // breakpoint="lg"
            // collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //     console.log(broken);
            // }}
            >
                {/* <div className='logo' /> */}
                <div className='main-logo'>
                    {!collapsed ? 'Smart BSS' : 'SBSS'}
                </div>
                <Menu
                    style={{ backgroundColor: 'transparent' }}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={items}
                    onClick={(info) => console.log('info', info)}
                />
            </Sider>
            <Layout className='site'>
                <Header className='header'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className='btn-header'
                    />
                    <div className='inner-header'>
                        <ChangeLanguage />
                        <CiUser size={20} cursor={'pointer'} />
                        <CiLogout size={20} cursor={'pointer'} />
                    </div>
                </Header>
                <Content className='content'>
                    <div className='inner-content'>
                        <LazyMotion features={domAnimation}>
                            <ContainerAnimation>
                                <Outlet />
                            </ContainerAnimation>
                        </LazyMotion>
                    </div>
                </Content>
                <Footer className='footer'>Smart BSS ©2023 Created by FireFull</Footer>
            </Layout>
        </ContainerLayout>
    );

};

export default memo(MainLayout);

