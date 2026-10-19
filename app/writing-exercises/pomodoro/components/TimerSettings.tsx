import { TimerSettings as TimerSettingsType } from '../hooks/usePomodoroTimer';
import { useId, useState } from 'react';

type TimerSettingsProps = {
    settings: TimerSettingsType;

    onUpdateSettings: (settings: TimerSettingsType) => void;
};

export default function TimerSettings({ settings, onUpdateSettings }: TimerSettingsProps) {
    const [localSettings, setLocalSettings] = useState(settings);
    const [previousSettings, setPreviousSettings] = useState(settings);

    if (settings !== previousSettings) {
        setPreviousSettings(settings);
        setLocalSettings(settings);
    }

    const hasChanges = Object.entries(localSettings).some(
        ([key, value]) => settings[key as keyof TimerSettingsType] !== value
    );

    const handleChange = (key: keyof TimerSettingsType, value: number | boolean) => {
        setLocalSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        onUpdateSettings(localSettings);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Timer Durations</h3>
                    <div className="space-y-3">
                        <NumberInput
                            label="Focus Session"
                            value={localSettings.pomodoroTime}
                            onChange={(value) => handleChange('pomodoroTime', value)}
                        />
                        <NumberInput
                            label="Short Break"
                            value={localSettings.shortBreakTime}
                            onChange={(value) => handleChange('shortBreakTime', value)}
                        />
                        <NumberInput
                            label="Long Break"
                            value={localSettings.longBreakTime}
                            onChange={(value) => handleChange('longBreakTime', value)}
                        />
                        <NumberInput
                            label="Long Break After"
                            value={localSettings.longBreakInterval}
                            onChange={(value) => handleChange('longBreakInterval', value)}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Automation</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                checked={localSettings.autoStartBreaks}
                                onChange={(e) => handleChange('autoStartBreaks', e.target.checked)}
                                className="w-4 h-4 rounded border-gray-600 text-green-500
                                         focus:ring-green-500 focus:ring-offset-gray-800"
                            />
                            <span className="text-gray-300">Auto-start breaks</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                checked={localSettings.autoStartPomodoros}
                                onChange={(e) => handleChange('autoStartPomodoros', e.target.checked)}
                                className="w-4 h-4 rounded border-gray-600 text-green-500
                                         focus:ring-green-500 focus:ring-offset-gray-800"
                            />
                            <span className="text-gray-300">Auto-start focus sessions</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-700">
                <button
                    onClick={handleSave}
                    disabled={!hasChanges}
                    className={`px-4 py-2 rounded-lg transition-all duration-200
                              ${hasChanges
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}
                >
                    {hasChanges ? 'Save Changes' : 'No Changes'}
                </button>
            </div>
        </div>
    );
}

function NumberInput({ label, value, onChange }: {
    label: string;
    value: number;

    onChange: (value: number) => void;
}) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
                {label}
            </label>
            <input
                id={id}
                type="number"
                min="1"
                max="60"
                value={value}
                onChange={(e) => onChange(Math.max(1, Math.min(60, Number(e.target.value))))}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white
                         border border-gray-600 focus:border-purple-400 focus:outline-hidden"
            />
        </div>
    );
}
