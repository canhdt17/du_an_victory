import React from 'react'
import HeaderDashboard from './headerdashboard'
import MenuDashboard from './menudashboard'

type Props = {}

const AdminDashboard = (props: Props) => {
  return (
    <div>
        <HeaderDashboard></HeaderDashboard>
        <div className='flex'>
            <MenuDashboard></MenuDashboard>
        <div className="bg-gray-100 w-full">
  <div className="p-8 space-y-8">
    {/* Dashboard Cards */}
    <div className="flex gap-4">
      {/* Earnings (Monthly) Card */}
      <div className="bg-white shadow-md rounded-lg w-1/4 p-4 flex justify-between items-center border-l-4 border-blue-500">
        <div>
          <p className="text-blue-500 text-sm font-bold">EARNINGS (MONTHLY)</p>
          <h3 className="text-2xl font-bold">$40,000</h3>
        </div>
        <div>
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2a1 1 0 100 2h8a1 1 0 100-2H6zM4 6a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>
        </div>
      </div>
      {/* Earnings (Annual) Card */}
      <div className="bg-white shadow-md rounded-lg w-1/4 p-4 flex justify-between items-center border-l-4 border-green-500">
        <div>
          <p className="text-green-500 text-sm font-bold">EARNINGS (ANNUAL)</p>
          <h3 className="text-2xl font-bold">$215,000</h3>
        </div>
        <div>
          <svg className="w-8 h-8 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 001 1h3a1 1 0 100-2h-2V5z" /></svg>
        </div>
      </div>
      {/* Tasks Card */}
      <div className="bg-white shadow-md rounded-lg w-1/4 p-4 flex flex-col border-l-4 border-teal-500">
        <div className="flex justify-between items-center">
          <p className="text-teal-500 text-sm font-bold">TASKS</p>
          <h3 className="text-2xl font-bold">50%</h3>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-teal-500 h-2 rounded-full" style={{width: '50%'}} />
        </div>
      </div>
      {/* Pending Requests Card */}
      <div className="bg-white shadow-md rounded-lg w-1/4 p-4 flex justify-between items-center border-l-4 border-yellow-500">
        <div>
          <p className="text-yellow-500 text-sm font-bold">PENDING REQUESTS</p>
          <h3 className="text-2xl font-bold">18</h3>
        </div>
        <div>
          <svg className="w-8 h-8 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 13a1 1 0 01.117 1.993L18 15H4a1 1 0 01-.117-1.993L4 13h14zM10 2a6 6 0 11.001 12.001A6 6 0 0110 2zm0 8a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 10-.001 2.001A1 1 0 0010 6z" /></svg>
        </div>
      </div>
    </div>
    {/* Charts */}
    <div className="grid grid-cols-2 gap-4">
      {/* Earnings Overview */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Earnings Overview</h3>
        <div className="relative h-48">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <polyline fill="none" stroke="#4F46E5" strokeWidth={3} points="0,150 50,120 100,140 150,90 200,110 250,60 300,100 350,20" />
            <circle cx={350} cy={20} r={4} fill="#4F46E5" />
          </svg>
        </div>
      </div>
      {/* Revenue Sources */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Revenue Sources</h3>
        <div className="flex justify-center items-center h-48">
          <svg viewBox="0 0 200 200" className="w-40 h-40">
            <circle cx={100} cy={100} r={80} fill="none" stroke="#60A5FA" strokeWidth={40} strokeDasharray="100 260" />
            <circle cx={100} cy={100} r={80} fill="none" stroke="#10B981" strokeWidth={40} strokeDasharray="60 300" strokeDashoffset={-100} />
            <circle cx={100} cy={100} r={80} fill="none" stroke="#FBBF24" strokeWidth={40} strokeDasharray="40 320" strokeDashoffset={-160} />
          </svg>
        </div>
        <div className="mt-4 flex justify-around text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 inline-block" />
            <span>Direct</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-500 inline-block" />
            <span>Social</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-yellow-500 inline-block" />
            <span>Referral</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg max-w-xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6 text-center">Biểu Đồ Cột</h2>
    <div className="flex items-end space-x-4">
      {/* Cột 1 */}
      <div className="w-12 h-64 bg-blue-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">100</span>
      </div>
      {/* Cột 2 */}
      <div className="w-12 h-48 bg-green-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">80</span>
      </div>
      {/* Cột 3 */}
      <div className="w-12 h-56 bg-red-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">90</span>
      </div>
      {/* Cột 4 */}
      <div className="w-12 h-72 bg-yellow-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">120</span>
      </div>
      {/* Cột 5 */}
      <div className="w-12 h-40 bg-purple-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">60</span>
      </div>
      <div className="w-12 h-40 bg-purple-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">60</span>
      </div>
      <div className="w-12 h-64 bg-blue-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">100</span>
      </div>
      {/* Cột 2 */}
      <div className="w-12 h-48 bg-green-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">80</span>
      </div>
      {/* Cột 3 */}
      <div className="w-12 h-56 bg-red-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">90</span>
      </div>
      {/* Cột 4 */}
      <div className="w-12 h-72 bg-yellow-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">120</span>
      </div>
      {/* Cột 5 */}
      <div className="w-12 h-40 bg-purple-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">60</span>
      </div>
      <div className="w-12 h-40 bg-purple-500 rounded-t-lg flex justify-center items-end text-white">
        <span className="text-xs mb-2">60</span>
      </div>
    </div>
    <div className="flex justify-between mt-4">
      <span className="text-sm  text-gray-700">Tháng 1</span>
      <span className="text-sm text-gray-700">Tháng 2</span>
      <span className="text-sm text-gray-700">Tháng 3</span>
      <span className="text-sm text-gray-700">Tháng 4</span>
      <span className="text-sm text-gray-700">Tháng 5</span>
      <span className="text-sm text-gray-700">Tháng 6</span>
      <span className="text-sm text-gray-700">Tháng 7</span>
      <span className="text-sm text-gray-700">Tháng 8</span>
      <span className="text-sm text-gray-700">Tháng 9</span>
      <span className="text-sm text-gray-700">Tháng 10</span>
      <span className="text-sm text-gray-700">Tháng 11</span>
      <span className="text-sm text-gray-700">Tháng 12</span>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-lg font-bold">DataTable Example</h1>
      <input type="text" placeholder="Search..." className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring focus:ring-blue-300" />
    </div>
    <div className="mb-4 flex items-center">
      <label htmlFor="entries" className="mr-2 text-sm">Show</label>
      <select id="entries" className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring focus:ring-blue-300">
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      <span className="ml-2 text-sm">entries per page</span>
    </div>
    <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Office</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Start date</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Salary</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {/* Rows for DataTable */}
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Tiger Nixon</td>
          <td className="border border-gray-300 px-4 py-2">System Architect</td>
          <td className="border border-gray-300 px-4 py-2">Edinburgh</td>
          <td className="border border-gray-300 px-4 py-2">61</td>
          <td className="border border-gray-300 px-4 py-2">2011/04/25</td>
          <td className="border border-gray-300 px-4 py-2">$320,800</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Garrett Winters</td>
          <td className="border border-gray-300 px-4 py-2">Accountant</td>
          <td className="border border-gray-300 px-4 py-2">Tokyo</td>
          <td className="border border-gray-300 px-4 py-2">63</td>
          <td className="border border-gray-300 px-4 py-2">2011/07/25</td>
          <td className="border border-gray-300 px-4 py-2">$170,750</td>
        </tr>
        {/* Add more rows as necessary */}
      </tbody>
    </table>
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-600">Showing 1 to 10 of 57 entries</div>
      <div className="flex space-x-1">
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">&lt;</button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">2</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">3</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">4</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">5</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">&gt;</button>
      </div>
    </div>
  </div>
</div>
        </div>

    </div>
  )
}

export default AdminDashboard