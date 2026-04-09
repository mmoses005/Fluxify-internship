import React, { useState } from 'react';
import './App.css';

// Initial team members data
const initialMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    department: 'Engineering',
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UX Designer',
    department: 'Design',
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Project Manager',
    department: 'Product',
    avatar: 'ER'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Backend Developer',
    department: 'Engineering',
    avatar: 'DK'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    avatar: 'LT'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'DevOps Engineer',
    department: 'Operations',
    avatar: 'JW'
  }
];

// Component: SearchBar
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="🔍 Search by name or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

// Component: MemberCard
function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-card-inner">
        <div className="avatar-container">
          <div className="avatar-circle">
            <span className="avatar-text">{member.avatar}</span>
          </div>
        </div>
        <div className="member-info">
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <p className="member-department">
            <span className="department-badge">{member.department}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Component: MemberList
function MemberList({ members }) {
  if (members.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-text">No team members found</p>
        <p className="empty-subtext">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <div className="member-list-grid">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

// Component: AddMemberForm
function AddMemberForm({ onAddMember }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role || !formData.department) {
      alert('Please fill in all fields');
      return;
    }

    const avatar = formData.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    onAddMember({
      ...formData,
      avatar: avatar
    });

    setFormData({ name: '', role: '', department: '' });
    setIsOpen(false);
  };

  return (
    <div className="form-container">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="add-button">
          + Add New Team Member
        </button>
      ) : (
        <div className="form-modal">
          <div className="form-header">
            <h3 className="form-title">Add New Member</h3>
            <button onClick={() => setIsOpen(false)} className="close-button">
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="member-form">
            <div className="form-fields">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              
              <input
                type="text"
                name="role"
                placeholder="Role (e.g., Frontend Developer)"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                required
              />
              
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Operations">Operations</option>
                <option value="Marketing">Marketing</option>
              </select>
              
              <button type="submit" className="submit-button">
                Add Member
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// Main App Component
function App() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMember = (newMember) => {
    setMembers([...members, { ...newMember, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <header className="app-header">
          <h1 className="app-title">Team Directory</h1>
          <p className="app-subtitle">Meet our amazing team members</p>
        </header>

        <div className="controls-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <AddMemberForm onAddMember={addMember} />
        </div>

        <MemberList members={filteredMembers} />
      </div>
    </div>
  );
}

export default App;