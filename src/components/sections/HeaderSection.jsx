"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const HeaderSection = () => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);

  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const firstMobileButtonRef = useRef(null);
  const headerRef = useRef(null);
  const underlineControls = useAnimation();

  // Header shadow & progress bar
  useEffect(() => {
    const onScroll = () => {
      const scY = window.scrollY;
      setIsScrolled(scY > 16);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (scY / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to update active nav
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id || "home");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // smooth scroll helper (handles mobile menu close timing + header offset)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      setMobileOpen(false);
      return;
    }

    // we want the scroll to happen after the mobile panel is closed (for nicer UX)
    // match/beat the motion panel duration (motion transition is 180ms in your code)
    const PANEL_CLOSE_MS = 220;

    const doScroll = () => {
      // ensure body scroll enabled (in case mobile-open effect hasn't run yet)
      document.body.style.overflow = "";

      // measure header height using ref (fallback to querySelector)
      const headerEl = headerRef.current || document.querySelector("header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;

      // calculate top so the element sits below the header
      const top = window.scrollY + el.getBoundingClientRect().top - headerHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // accessibility: move focus to the section
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      setTimeout(() => el.removeAttribute("tabindex"), 800);
    };

    // close mobile panel first
    setMobileOpen(false);

    // if menu was open, wait for it to collapse visually, else scroll immediately
    if (mobileOpen) {
      setTimeout(doScroll, PANEL_CLOSE_MS);
    } else {
      // small timeout ensures any body overflow reset logic runs first
      setTimeout(doScroll, 10);
    }
  };

  // Underline helpers
  const placeUnderlineOnElement = (el, immediate = false) => {
    if (!navRef.current || !el) return;
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = Math.max(0, rect.left - navRect.left);
    const width = Math.max(0, rect.width);
    underlineControls.start({
      left,
      width,
      opacity: 1,
      transition: immediate
        ? { duration: 0 }
        : { type: "spring", stiffness: 260, damping: 28 },
    });
  };

  const handleNavMouseEnter = (e) => {
    const target = e.currentTarget;
    requestAnimationFrame(() => placeUnderlineOnElement(target));
  };

  const handleNavMouseLeave = () => {
    const activeEl = navRef.current?.querySelector('[data-active="true"]');
    if (activeEl) {
      requestAnimationFrame(() => placeUnderlineOnElement(activeEl));
    } else {
      underlineControls.start({ opacity: 0 });
    }
  };

  useEffect(() => {
    const activeEl = navRef.current?.querySelector('[data-active="true"]');
    if (activeEl) requestAnimationFrame(() => placeUnderlineOnElement(activeEl, true));
    else underlineControls.start({ opacity: 0 });

    const handleResize = () => {
      const act = navRef.current?.querySelector('[data-active="true"]');
      if (act) placeUnderlineOnElement(act, true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  // MOBILE UX: lock scroll, trap focus, close on outside click/Esc
  useEffect(() => {
    // lock body scroll when mobile panel is open
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    const handleClickOutside = (e) => {
      if (mobileOpen && mobilePanelRef.current && !mobilePanelRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      window.addEventListener("keydown", handleKey);
      document.addEventListener("mousedown", handleClickOutside);
      // move focus into the mobile panel
      setTimeout(() => {
        firstMobileButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
      // ensure overflow reset on cleanup
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 shadow-md" : "bg-transparent"}`}
    >
      {/* Top compact progress bar */}
      <div className="h-1 w-full bg-transparent">
        <div
          className="h-full bg-indigo-500 dark:bg-indigo-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      {/* Container is full-width but content centered with padding */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-full mx-auto flex items-center justify-between h-16">
          {/* Brand (smaller image on mobile) */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToId("home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") scrollToId("home");
            }}
          >
            <motion.div
              initial={{ scale: 0.95, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-lg flex-shrink-0 cursor-pointer"
              aria-hidden
            >
              SH
            </motion.div>

            <div className="hidden md:block">
              <div className="font-semibold text-slate-900 dark:text-white">
                Shailesh Hawale
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-300">
                MERN • AI
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <ul
              ref={navRef}
              className="flex items-center gap-4 relative"
              onMouseLeave={handleNavMouseLeave}
              aria-label="Primary"
            >
              {/* animated underline */}
              <motion.div
                initial={{ left: 0, width: 0, opacity: 0 }}
                animate={underlineControls}
                className="absolute bottom-[-6px] h-0.5 bg-indigo-500 rounded"
              />

              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToId(item.id)}
                      onMouseEnter={handleNavMouseEnter}
                      data-active={isActive ? "true" : "false"}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none cursor-pointer rounded-md ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-md bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
              className="p-2 rounded-md bg-white/90 dark:bg-slate-800/90 shadow-md cursor-pointer"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel (full width, aria dialog) */}
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.18 }}
        className="md:hidden overflow-hidden"
      >
        <div
          ref={mobilePanelRef}
          className="w-full bg-white dark:bg-slate-900 px-4 pb-6"
        >
          <ul className="flex flex-col gap-2 mt-2">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="cursor-pointer">
                  <button
                    ref={idx === 0 ? firstMobileButtonRef : null}
                    onClick={() => scrollToId(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-150 text-base ${
                      isActive
                        ? "bg-indigo-50 dark:bg-slate-800 text-indigo-600"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default HeaderSection;
