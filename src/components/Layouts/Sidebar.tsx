import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('');
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value;
    });
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleMouseOver = () => {
    setIsDisabled(true);
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      <nav className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300`}>
        <div className='bg-white dark:bg-black h-full'>
          <div className='flex justify-between items-center px-4 py-3'>
            <NavLink to='/' className='main-logo flex items-center shrink-0'>
              <img className='w-8 ml-[5px] flex-none' src='/assets/images/logo.svg' alt='logo' />
              <span className='text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light'>ZeroTrust</span>
            </NavLink>

            <button
              type='button'
              className='collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180'
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className='m-auto rotate-90' />
            </button>
          </div>
          <PerfectScrollbar className='h-[calc(100vh-80px)] relative'>
            <ul className='relative font-semibold space-y-0.5 p-4 py-0'>
              <li className='menu nav-item'>
                <button type='button' className={`${currentMenu === 'iamUsers' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('iamUsers')}>
                  <div className='flex items-center'>
                    <IconMenuDashboard className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('iamUsers')}</span>
                  </div>

                  <div className={currentMenu !== 'iamUsers' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'iamUsers' ? 'auto' : 0}>
                  <ul className='sub-menu text-gray-500'>
                    <li>
                      <NavLink to='/users/hr'>{t('usersHr')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/users/dev-ops'>{t('usersDevops')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/users/app'>{t('usersApp')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/users/saas'>{t('usersSaaS')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className='menu nav-item'>
                <button type='button' className={`${currentMenu === 'iamAssets' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('iamAssets')}>
                  <div className='flex items-center'>
                    <IconMenuDashboard className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('iamAssets')}</span>
                  </div>

                  <div className={currentMenu !== 'iamAssets' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'iamAssets' ? 'auto' : 0}>
                  <ul className='sub-menu text-gray-500'>
                    <li>
                      <NavLink to='/assets/server-aws'>{t('assetsServerAWS')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/assets/server-onpremise'>{t('assetsServerOnpremise')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/assets/server-access-control'>{t('assetsServerAccessControl')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/assets/db-aws-rds'>{t('assetsDBAWSRDS')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/assets/db-onpremise'>{t('assetsDBOnpremise')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/assets/db-access-control'>{t('assetsDBAccessControl')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className='menu nav-item'>
                <button type='button' className={`${currentMenu === 'iamPolicy' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('iamPolicy')}>
                  <div className='flex items-center'>
                    <IconMenuDashboard className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('iamPolicy')}</span>
                  </div>

                  <div className={currentMenu !== 'iamPolicy' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'iamPolicy' ? 'auto' : 0}>
                  <ul className='sub-menu text-gray-500'>
                    <li>
                      <NavLink to='/policy/portal'>{t('policyPortal')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/policy/dev-ops'>{t('policyDevops')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/policy/app'>{t('policyApp')}</NavLink>
                    </li>
                    <li>
                      <NavLink to='/policy/saas'>{t('policySaaS')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className='menu nav-item'>
                <button type='button' className={`${currentMenu === 'iamWorkflow' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('iamWorkflow')}>
                  <div className='flex items-center'>
                    <IconMenuDashboard className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('iamWorkflow')}</span>
                  </div>

                  <div className={currentMenu !== 'iamWorkflow' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'iamWorkflow' ? 'auto' : 0}>
                  <ul className='sub-menu text-gray-500'>
                    <li>
                      <NavLink to='/workflow/main'>{t('workflowMain')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className='menu nav-item'>
                <NavLink
                  to='/monitor'
                  className='group hover:cursor-default'
                  onMouseOver={handleMouseOver}
                  onClick={(e) => {
                    if (isDisabled) e.preventDefault();
                  }}
                >
                  <div className='flex items-center'>
                    <IconMenuDragAndDrop className={`group-hover:${isDisabled ? '!text-primary' : 'text-primary'} shrink-0`} />
                    <span className={`ltr:pl-3 rtl:pr-3 ${isDisabled ? 'text-gray-400 dark:text-gray-600' : 'text-black dark:text-[#506690] dark:group-hover:text-white-dark'}`}>
                      {t('iamMonitor')}
                    </span>
                  </div>
                </NavLink>
              </li>

              <li className='menu nav-item'>
                <NavLink
                  to='/audit'
                  className='group hover:cursor-default'
                  onMouseOver={handleMouseOver}
                  onClick={(e) => {
                    if (isDisabled) e.preventDefault();
                  }}
                >
                  <div className='flex items-center'>
                    <IconMenuDragAndDrop className={`group-hover:${isDisabled ? '!text-primary' : 'text-primary'} shrink-0`} />
                    <span className={`ltr:pl-3 rtl:pr-3 ${isDisabled ? 'text-gray-400 dark:text-gray-600' : 'text-black dark:text-[#506690] dark:group-hover:text-white-dark'}`}>{t('iamAudit')}</span>
                  </div>
                </NavLink>
              </li>

              <li className='menu nav-item'>
                <NavLink to='/compliance' className='group'>
                  <div className='flex items-center'>
                    <IconMenuDragAndDrop className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('compliance')}</span>
                  </div>
                </NavLink>
              </li>

              <li className='menu nav-item'>
                <NavLink
                  to='/admin'
                  className='group hover:cursor-default'
                  onMouseOver={handleMouseOver}
                  onClick={(e) => {
                    if (isDisabled) e.preventDefault();
                  }}
                >
                  <div className='flex items-center'>
                    <IconMenuDragAndDrop className={`group-hover:${isDisabled ? '!text-primary' : 'text-primary'} shrink-0`} />
                    <span className={`ltr:pl-3 rtl:pr-3 ${isDisabled ? 'text-gray-400 dark:text-gray-600' : 'text-black dark:text-[#506690] dark:group-hover:text-white-dark'}`}>{t('admin')}</span>
                  </div>
                </NavLink>
              </li>

              <h2 className='py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1'>
                <IconMinus className='w-4 h-5 flex-none hidden' />
                <span>{t('user_interface')}</span>
              </h2>

              <li className='menu nav-item'>
                <NavLink to='/chat' className='group'>
                  <div className='flex items-center'>
                    <IconMenuDragAndDrop className='group-hover:!text-primary shrink-0' />
                    <span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>{t('chat')}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
