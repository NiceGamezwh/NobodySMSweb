"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface QRModalProps {
  children: React.ReactNode
  title?: string
}

export function QRModal({ children, title = "联系客服" }: QRModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-4 border-yellow-400">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-black text-gray-900 mb-4">📱 {title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-4">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">选择联系方式</h3>

            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 rounded-full"
                asChild
              >
                <Link href="https://qm.qq.com/q/vh22lJKE3C" target="_blank">
                  💬 添加QQ好友
                </Link>
              </Button>

              <Button
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-4 rounded-full"
                asChild
              >
                <Link href="https://qm.qq.com/q/577qIcQoQo" target="_blank">
                  👥 加入QQ群 (Nobody SMS 3群)
                </Link>
              </Button>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-left">
              <p className="text-sm text-gray-700 font-semibold">
                ⚠️ 重要提醒：
                <br />• 请先访问平台 v3.0
                <br />• 联系客服进行账户开通
                <br />• 新用户首充享 6.6 折优惠
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(false)}
            className="w-full bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-3 rounded-full"
          >
            <X className="w-5 h-5 mr-2" />
            关闭
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
