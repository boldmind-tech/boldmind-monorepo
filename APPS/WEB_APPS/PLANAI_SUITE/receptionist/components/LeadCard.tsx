'use client';

import { useState } from 'react';
import { Mail, Phone, Calendar, User, MoreVertical, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  lastContact: Date;
  notes?: string;
}

interface LeadCardProps {
  lead: Lead;
  onUpdate?: (leadId: string, updates: Partial<Lead>) => void;
}

export default function LeadCard({ lead, onUpdate }: LeadCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(lead.notes || '');

  const statusColors = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    qualified: 'bg-green-100 text-green-800',
    converted: 'bg-purple-100 text-purple-800',
    lost: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    new: 'New',
    contacted: 'Contacted',
    qualified: 'Qualified',
    converted: 'Converted',
    lost: 'Lost',
  };

  const handleStatusChange = async (newStatus: Lead['status']) => {
    try {
      onUpdate?.(lead.id, { status: newStatus });
      toast.success(`Lead status updated to ${statusLabels[newStatus]}`);
    } catch (error) {
      toast.error('Failed to update lead status');
    }
  };

  const handleSaveNotes = async () => {
    try {
      onUpdate?.(lead.id, { notes });
      setIsEditing(false);
      toast.success('Notes updated');
    } catch (error) {
      toast.error('Failed to update notes');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{lead.name}</h3>
            <div className="flex items-center space-x-4 mt-1">
              <span className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-1" />
                {lead.email}
              </span>
              {lead.phone && (
                <span className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-1" />
                  {lead.phone}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
            {statusLabels[lead.status]}
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          Last contact: {lead.lastContact.toLocaleDateString()}
        </span>
        <span>Source: {lead.source}</span>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Status Actions</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(statusLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleStatusChange(key as Lead['status'])}
                  disabled={lead.status === key}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    lead.status === key
                      ? statusColors[key as Lead['status']]
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Notes</h4>
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveNotes}
                    className="p-1 text-green-600 hover:text-green-800"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setNotes(lead.notes || '');
                    }}
                    className="p-1 text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
              )}
            </div>
            {isEditing ? (
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            ) : (
              <p className="text-gray-700 whitespace-pre-wrap">
                {notes || 'No notes added yet.'}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}