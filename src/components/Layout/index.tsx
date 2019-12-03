import React from 'react'
import '../../styles/index.css';

interface LayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: LayoutProps): any {
    return children;
}

export default Layout;