import { useState } from 'react'
import './App.css'

// ─── TaskItem ────────────────────────────────────────────────────────────────
function TaskItem({ task, onRemove }) {
  return (
    <li className="task-item" style={{ '--delay': '0ms' }}>
      <span className="task-dot" />
      <span className="task-text">{task.text}</span>
      <button
        className="btn-remove"
        onClick={() => onRemove(task.id)}
        aria-label={`Remover tarefa: ${task.text}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Remover
      </button>
    </li>
  )
}

// ─── EmptyState ───────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <rect x="6" y="8" width="28" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          <path d="M13 16h14M13 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="30" cy="30" r="8" fill="var(--green-800)"/>
          <path d="M30 27v6M27 30h6" stroke="var(--green-400)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="empty-title">Nenhuma tarefa ainda</p>
      <p className="empty-sub">Adicione sua primeira tarefa acima ↑</p>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  // Requisito: useState para o array de tarefas
  const [tasks, setTasks] = useState([
    { id: Date.now() - 2000, text: 'Aprender React Hooks' },
    { id: Date.now() - 1000, text: 'Praticar useState e useEffect' },
  ])

  // Requisito: useState para o componente controlado do input
  const [inputValue, setInputValue] = useState('')

  // Requisito: Adicionar tarefa com ID único e atualização imutável
  const handleAddTask = () => {
    const text = inputValue.trim()
    if (!text) return

    const newTask = { id: Date.now(), text }
    setTasks(prevTasks => [...prevTasks, newTask]) // novo array (imutável)
    setInputValue('')
  }

  // Requisito: Remover tarefa usando .filter() de forma imutável
  const handleRemoveTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  // Submissão por Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddTask()
  }

  const taskCount = tasks.length

  return (
    <div className="card">
      {/* ── Header ── */}
      <header className="card-header">
        <div className="header-top">
          <div className="logo-badge">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 9l4 4 8-8" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="header-label">Lista de Tarefas</span>
        </div>
        <h1 className="card-title">Minhas Tarefas</h1>
        {taskCount > 0 && (
          <p className="task-count">
            {taskCount} {taskCount === 1 ? 'tarefa pendente' : 'tarefas pendentes'}
          </p>
        )}
      </header>

      {/* ── Input ── */}
      <div className="input-group">
        {/* Requisito: value ligado ao estado + onChange atualiza estado */}
        <input
          type="text"
          className="task-input"
          placeholder="Nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Nova tarefa"
        />
        <button
          className="btn-add"
          onClick={handleAddTask}
          disabled={!inputValue.trim()}
          aria-label="Adicionar tarefa"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          Adicionar
        </button>
      </div>

      {/* ── List ── */}
      <section aria-label="Lista de tarefas">
        {taskCount === 0 ? (
          <EmptyState />
        ) : (
          // Requisito: .map() para renderização dinâmica + key={task.id}
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onRemove={handleRemoveTask}
              />
            ))}
          </ul>
        )}
      </section>

      {/* ── Footer ── */}
      {taskCount > 0 && (
        <footer className="card-footer">
          <button
            className="btn-clear-all"
            onClick={() => setTasks([])}
          >
            Limpar tudo
          </button>
        </footer>
      )}
    </div>
  )
}
