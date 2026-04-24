'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Circle, ChevronRight, ShoppingCart, Cpu, AlertCircle } from 'lucide-react'
import { componentCategories, type PCComponent } from '@/lib/pc-components'

interface BuildFormData {
  name: string
  email: string
  phone: string
  useCase: string
  budget: string
  notes: string
}

export function BuildConfigurator() {
  const [selected, setSelected] = useState<Record<string, PCComponent>>({})
  const [step, setStep] = useState<'configure' | 'contact' | 'success'>('configure')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<BuildFormData>()

  const totalPrice = Object.values(selected).reduce((sum, c) => sum + c.price, 0)

  const requiredCategories = componentCategories.filter((c) => c.required)
  const allRequiredSelected = requiredCategories.every((c) => selected[c.id])

  const selectComponent = (categoryId: string, component: PCComponent) => {
    setSelected((prev) => {
      if (prev[categoryId]?.id === component.id) {
        const next = { ...prev }
        delete next[categoryId]
        return next
      }
      return { ...prev, [categoryId]: component }
    })
  }

  const onSubmit = async (data: BuildFormData) => {
    setIsSubmitting(true)
    setSubmitError(false)
    try {
      const payload = {
        ...data,
        selectedComponents: Object.fromEntries(
          Object.entries(selected).map(([catId, comp]) => [catId, `${comp.brand} ${comp.name} — $${comp.price}`])
        ),
        totalPrice,
      }
      const res = await fetch('/api/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStep('success')
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (step === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold font-display text-text-primary mb-3">Build Request Submitted!</h2>
        <p className="text-text-muted max-w-md mx-auto">
          We&apos;ve received your custom PC build request. We&apos;ll review your selections and get back to you shortly with availability and pricing confirmation.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={() => setStep('configure')}
          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${step === 'configure' ? 'text-text-primary' : 'text-text-muted'}`}
        >
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${step === 'configure' ? 'border-primary bg-primary text-white' : 'border-border text-text-muted'}`}>1</span>
          Select Parts
        </button>
        <ChevronRight className="w-4 h-4 text-border" />
        <button
          onClick={() => allRequiredSelected && setStep('contact')}
          className={`flex items-center gap-2 text-sm font-semibold transition-colors ${step === 'contact' ? 'text-text-primary' : 'text-text-muted'}`}
        >
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${step === 'contact' ? 'border-primary bg-primary text-white' : 'border-border text-text-muted'}`}>2</span>
          Your Details
        </button>
      </div>

      <AnimatePresence mode="wait">
        {step === 'configure' && (
          <motion.div
            key="configure"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Component Selector */}
            <div className="lg:col-span-2 space-y-6">
              {componentCategories.map((category) => (
                <div key={category.id} className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                  <div className="px-5 py-3 border-b border-border flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-text-primary text-sm">{category.label}</span>
                    {category.required && <span className="text-xs text-text-muted ml-auto">Required</span>}
                    {!category.required && <span className="text-xs text-accent ml-auto">Optional</span>}
                  </div>
                  <div className="divide-y divide-border">
                    {category.components.map((component) => {
                      const isSelected = selected[category.id]?.id === component.id
                      return (
                        <button
                          key={component.id}
                          onClick={() => component.inStock && selectComponent(category.id, component)}
                          disabled={!component.inStock}
                          className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-150 ${
                            !component.inStock
                              ? 'opacity-40 cursor-not-allowed'
                              : isSelected
                              ? 'bg-primary/10'
                              : 'hover:bg-white/3'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {isSelected ? (
                              <CheckCircle className="w-5 h-5 text-primary" />
                            ) : (
                              <Circle className="w-5 h-5 text-border" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-semibold ${isSelected ? 'text-text-primary' : 'text-text-muted'}`}>
                                {component.brand} {component.name}
                              </span>
                              {!component.inStock && (
                                <span className="text-xs bg-border text-text-muted px-2 py-0.5 rounded">Out of Stock</span>
                              )}
                            </div>
                            <span className="text-xs text-text-muted">{component.specs}</span>
                          </div>
                          <span className={`text-sm font-bold flex-shrink-0 ${isSelected ? 'text-primary' : 'text-text-muted'}`}>
                            {component.price === 0 ? 'Included' : `$${component.price}`}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-bg-surface border border-border rounded-lg overflow-hidden">
                <div className="px-5 py-3 border-b border-border flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-text-primary text-sm">Build Summary</span>
                </div>
                <div className="p-5 space-y-3">
                  {componentCategories.map((cat) =>
                    selected[cat.id] ? (
                      <div key={cat.id} className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs text-text-muted">{cat.label}</p>
                          <p className="text-xs text-text-primary font-medium truncate">{selected[cat.id].name}</p>
                        </div>
                        <span className="text-xs font-bold text-primary flex-shrink-0">
                          {selected[cat.id].price === 0 ? 'Free' : `$${selected[cat.id].price}`}
                        </span>
                      </div>
                    ) : (
                      <div key={cat.id} className="flex justify-between gap-2 opacity-40">
                        <p className="text-xs text-text-muted">{cat.label}</p>
                        <span className="text-xs text-text-muted">—</span>
                      </div>
                    )
                  )}

                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-text-primary">Est. Total</span>
                      <span className="text-lg font-bold text-primary">${totalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1">+ labor & assembly fee</p>
                  </div>

                  {!allRequiredSelected && (
                    <div className="flex items-start gap-2 text-xs text-text-muted bg-bg-primary rounded-md p-3">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-accent" />
                      Select all required components to continue
                    </div>
                  )}

                  <button
                    onClick={() => setStep('contact')}
                    disabled={!allRequiredSelected}
                    className="w-full py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-md text-sm transition-all"
                  >
                    Continue to Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Full Name</label>
                    <input
                      {...register('name', { required: 'Required' })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                    />
                    {errors.name && <p className="text-accent text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Email</label>
                    <input
                      {...register('email', { required: 'Required' })}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                    />
                    {errors.email && <p className="text-accent text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone</label>
                    <input
                      {...register('phone', { required: 'Required' })}
                      placeholder="(815) 000-0000"
                      className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                    />
                    {errors.phone && <p className="text-accent text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Budget Range</label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                    >
                      <option value="">Select budget</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 – $1,000</option>
                      <option value="1000-1500">$1,000 – $1,500</option>
                      <option value="1500-2000">$1,500 – $2,000</option>
                      <option value="over-2000">Over $2,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">Primary Use Case</label>
                  <select
                    {...register('useCase', { required: 'Required' })}
                    className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm"
                  >
                    <option value="">Select use case</option>
                    <option value="gaming">Gaming</option>
                    <option value="workstation">Professional Workstation</option>
                    <option value="home-office">Home Office</option>
                    <option value="content-creation">Content Creation / Streaming</option>
                    <option value="server">Home Server / NAS</option>
                    <option value="general">General Use</option>
                  </select>
                  {errors.useCase && <p className="text-accent text-xs mt-1">{errors.useCase.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">Additional Notes <span className="text-text-muted font-normal">(optional)</span></label>
                  <textarea
                    {...register('notes')}
                    rows={4}
                    placeholder="Any specific requirements, peripherals you need, or questions for us..."
                    className="w-full px-4 py-2.5 bg-bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm resize-none"
                  />
                </div>

                {submitError && (
                  <p className="text-accent text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('configure')}
                    className="px-5 py-2.5 border border-border text-text-muted hover:text-text-primary hover:border-primary rounded-lg text-sm font-semibold transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold rounded-lg text-sm transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Build Request'}
                  </button>
                </div>
              </form>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-bg-surface border border-border rounded-lg overflow-hidden">
                <div className="px-5 py-3 border-b border-border flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-text-primary text-sm">Your Build</span>
                </div>
                <div className="p-5 space-y-3">
                  {componentCategories.map((cat) =>
                    selected[cat.id] ? (
                      <div key={cat.id} className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs text-text-muted">{cat.label}</p>
                          <p className="text-xs text-text-primary font-medium truncate">{selected[cat.id].name}</p>
                        </div>
                        <span className="text-xs font-bold text-primary flex-shrink-0">
                          {selected[cat.id].price === 0 ? 'Free' : `$${selected[cat.id].price}`}
                        </span>
                      </div>
                    ) : null
                  )}
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-text-primary">Est. Total</span>
                      <span className="text-lg font-bold text-primary">${totalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1">+ labor & assembly fee</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
