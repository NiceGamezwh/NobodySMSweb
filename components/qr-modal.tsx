"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
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
          <div className="text-center">
            <Image
              src="/images/contact-qr.jpeg"
              alt="NobodySMS 联系客服二维码"
              width={400}
              height={600}
              className="rounded-xl shadow-lg border-2 border-gray-200 mx-auto"
              priority
            />
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold text-gray-900">扫码联系客服</h3>
            <p className="text-gray-600 leading-relaxed">
              扫描上方二维码添加客服微信
              <br />
              获取专业技术支持和账户服务
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-left">
              <p className="text-sm text-gray-700 font-semibold">
                ⚠️ 重要提醒：
                <br />• 请先下载客户端 v2.0
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
