import React, { useState } from 'react';
import { Bell, FileText, Settings, Calendar, User, Shield, ChevronLeft, ChevronRight, Menu, Home, BookOpen, ClipboardList, GraduationCap, FileCheck, DollarSign, Users, Clock, MessageSquare } from 'lucide-react';

export default function AmityPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses = [
    { code: 'CSE303', name: 'Analysis and Design of Algorithms', attended: 73, total: 77, percent: 94.81 },
    { code: 'SKE301', name: 'Aptitude and Reasoning Ability', attended: 30, total: 30, percent: 100.00 },
    { code: 'BS309', name: 'Cognitive Skills, Leadership and Decision Making', attended: 43, total: 45, percent: 95.56 },
    { code: 'GRMN139', name: 'Communicative German- II', attended: 15, total: 15, percent: 100.00 },
    { code: 'CSE201', name: 'Database Management Systems', attended: 59, total: 62, percent: 95.16 },
    { code: 'IT307', name: 'Exploring the Networks', attended: 73, total: 80, percent: 91.25 }
  ];

  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Calendar, label: 'My Calendar' },
    { icon: BookOpen, label: 'APW' },
    { icon: ClipboardList, label: 'SAP' },
    { icon: FileCheck, label: 'Discipline Regd.' },
    { icon: GraduationCap, label: 'My Courses' },
    { icon: FileText, label: 'AICE' },
    { icon: BookOpen, label: 'Summer Sem', hasSubmenu: true },
    { icon: FileText, label: 'Re-Registration' },
    { icon: Clock, label: 'Time Table' },
    { icon: Users, label: 'My Faculty' },
    { icon: FileCheck, label: 'Examination', hasSubmenu: true },
    { icon: Users, label: 'ATPC Placement', hasSubmenu: true },
    { icon: FileText, label: 'Student Document', hasSubmenu: true },
    { icon: DollarSign, label: 'Fee Details' },
    { icon: FileText, label: 'IAD' },
    { icon: FileCheck, label: 'Gssc Registration' },
    { icon: MessageSquare, label: 'Suggestion Box' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Desktop */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-full overflow-y-auto">
          <div className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
            <h1 className="text-white text-2xl font-bold tracking-wide">AMIZONE</h1>
          </div>
          <nav className="p-3">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-2.5 text-sm hover:bg-gray-50 rounded-lg transition-colors mb-1 ${
                    item.active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  <span className="flex-1">{item.label}</span>
                  {item.hasSubmenu && <ChevronRight className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md">
          <div className="py-3 px-4 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-white mr-4 p-1"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">AMIZONE</h1>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <button className="relative p-1.5 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                <Bell className="text-white w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">5</span>
              </button>
              <button className="relative p-1.5 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors hidden md:block">
                <FileText className="text-white w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">1</span>
              </button>
              <button className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors hidden md:block">
                <Settings className="text-white w-5 h-5" />
              </button>
              <button className="relative p-1.5 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors hidden md:block">
                <Calendar className="text-white w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">30</span>
              </button>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-3 py-1.5 hover:bg-opacity-30 transition-colors cursor-pointer">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden border-2 border-white">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-white text-xs hidden md:block">
                  <div className="font-semibold">Mr UTKARSH M.</div>
                  <div className="text-xs opacity-90">A7805223017</div>
                </div>
                <ChevronRight className="w-4 h-4 text-white hidden md:block" />
              </div>
            </div>
          </div>
          
          {/* Subheader */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-2.5 px-4">
            <div className="flex items-center text-sm">
              <Home className="w-4 h-4 mr-2" />
              <span className="text-blue-200">Home</span>
              <ChevronRight className="w-4 h-4 mx-2 text-blue-300" />
              <span className="font-medium">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {/* Dashboard Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Attendance Card */}
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * 0.15}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">6</span>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">Attendance</h3>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-1.5">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm font-medium">Above 85%</span>
                </div>
              </div>
            </div>

            {/* Fee Due Card */}
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-white text-lg font-semibold mb-2">Fee Due</h3>
              <p className="text-white text-3xl font-bold mb-4">1592000.00</p>
              <ul className="text-white text-xs space-y-1.5 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Due date: 19/11/2025</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Late Fee Rs.100/- per day upto 21/11/2025</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Late Fee Rs.7500/- upto 11/12/2025</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Late Fee Rs.17000/- from 12/12/2025</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-400 text-gray-800 px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-yellow-500 transition-colors shadow-md">
                Pay Now
              </button>
            </div>

            {/* Achievements Card */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center flex-1 justify-center">
                  <div className="bg-white bg-opacity-30 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Achievements</h3>
                  <p className="text-white text-5xl font-bold">0</p>
                </div>
                <button className="w-full bg-white bg-opacity-30 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:bg-opacity-40 transition-colors mt-4">
                  Add Achievement
                </button>
              </div>
            </div>

            {/* CGPA Card */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-white text-lg font-semibold mb-4">CGPA - 7.88</h3>
              <div className="relative h-32 mt-2">
                <svg className="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.7 }} />
                      <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,100 50,85 100,70 150,50 200,35"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                  />
                  {[[0, 100], [50, 85], [100, 70], [150, 50], [200, 35]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="6" fill="#1e40af" stroke="#fff" strokeWidth="3" />
                  ))}
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white text-xs font-semibold px-2">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Classes and My Attendance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* My Classes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-5 text-gray-800">My Classes</h3>
              <div className="flex items-center justify-center space-x-4 mb-5">
                <button className="text-blue-500 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-2 bg-gray-50 px-5 py-2.5 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-base font-semibold text-gray-700">November 6, 2025</span>
                </div>
                <button className="text-blue-500 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-gray-50 h-64 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200">
                <div className="text-center">
                  <Calendar className="w-14 h-14 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm font-medium text-gray-500">No classes scheduled</p>
                </div>
              </div>
            </div>

            {/* My Attendance */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-5 text-gray-800">My Attendance</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between border-l-4 border-yellow-400 pl-4 py-3 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1 pr-4 min-w-0">
                      <div className="font-bold text-sm text-gray-800">{course.code}</div>
                      <div className="text-gray-600 text-xs mt-1 truncate">{course.name}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{course.attended}/{course.total}</span>
                      <div className="relative w-14 h-14 flex-shrink-0">
                        <svg className="w-14 h-14 transform -rotate-90">
                          <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="#e5e7eb"
                            strokeWidth="5"
                            fill="none"
                          />
                          <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke={course.percent >= 85 ? '#10b981' : course.percent >= 75 ? '#f59e0b' : '#ef4444'}
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 24}`}
                            strokeDashoffset={`${2 * Math.PI * 24 * (1 - course.percent / 100)}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-xs font-bold ${course.percent >= 85 ? 'text-green-600' : course.percent >= 75 ? 'text-orange-600' : 'text-red-600'}`}>
                            {course.percent.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
