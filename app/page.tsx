"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Favicon } from "@/components/favicon"
import {
  MessageSquare,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  Globe,
  Star,
  CheckCircle,
  Award,
  Sparkles,
  Code,
  Key,
  Database,
  Phone,
  Trash2,
  Ban,
  RefreshCw,
  Download,
  AlertTriangle,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-teal-100 relative overflow-hidden">
      <Favicon />
      <AnimatedBackground />
      <FloatingElements />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-yellow-400 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/nobody-logo.jpeg"
              alt="Nobody 9527 Logo"
              width={50}
              height={50}
              className="rounded-full shadow-lg border-2 border-yellow-400 animate-float"
            />
            <div>
              <span className="text-2xl font-black text-gray-900">Nobody</span>
              <span className="text-lg font-bold text-teal-600 ml-1">SMS</span>
              <div className="text-xs text-gray-500 font-semibold">9527 社区出品</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              功能特色
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              产品演示
            </a>
            <a
              href="#api"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              API文档
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              价格
            </a>
            <a
              href="#privacy"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              隐私政策
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-yellow-600 transition-colors font-semibold cursor-pointer"
            >
              联系我们
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
                <Download className="w-5 h-5 mr-2" />
                立即下载
              </Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="https://work.weixin.qq.com/ca/cawcde545684bd4afc" target="_blank">
                <MessageSquare className="w-5 h-5 mr-2" />
                联系客服
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-wiggle"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Brand Banner */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <Image
                src="/images/nobody-banner.jpeg"
                alt="Nobody Community Banner"
                width={800}
                height={267}
                className="rounded-2xl shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-all duration-500"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 热门
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 max-w4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black border-0 text-lg px-6 py-2 font-bold animate-wiggle">
                🎯 Nobody 9527 社区荣誉出品
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                  专业接码
                </span>
                <br />
                <span className="text-gray-800">验证平台</span>
              </h1>

              <div className="text-2xl lg:text-3xl font-bold text-gray-700 space-y-2">
                <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  EVERY NOBODY IS SOMEBODY
                </p>
                <p className="text-lg text-gray-600 font-normal">🚀 安全 • 快速 • 可靠的短信验证码接收服务</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 font-semibold">
                ⚠️ <span className="text-red-600">重要提醒</span>：根据监管要求，平台不支持自行注册和充值
                <br />
                如需使用服务，请下载客户端后联系管理员进行账户开通和充值操作
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-xl px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
                asChild
              >
                <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
                  <Download className="w-6 h-6 mr-3" />
                  立即下载客户端
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-teal-400 text-teal-700 hover:bg-teal-50 font-bold text-xl px-8 py-4 rounded-full bg-transparent"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Code className="w-6 h-6 mr-3" />
                查看API文档
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-3 border-yellow-300 hover:border-yellow-400 transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 ease-out">
                <div className="text-3xl font-black text-yellow-600">¥0.3</div>
                <div className="text-sm text-gray-600 font-semibold">每条短信</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-3 border-teal-300 hover:border-teal-400 transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 ease-out">
                <div className="text-3xl font-black text-teal-600">24/7</div>
                <div className="text-sm text-gray-600 font-semibold">在线服务</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-3 border-purple-300 hover:border-purple-400 transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 ease-out">
                <div className="text-3xl font-black text-purple-600">100%</div>
                <div className="text-sm text-gray-600 font-semibold">隐私保护</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-3 border-orange-300 hover:border-orange-400 transition-all transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 ease-out">
                <div className="text-3xl font-black text-orange-600">9527</div>
                <div className="text-sm text-gray-600 font-semibold">社区编号</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-teal-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">📊 平台数据一览</h2>
            <p className="text-xl text-gray-300">实时数据展示我们的服务实力</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400">50K+</div>
              <div className="text-lg text-gray-300 font-semibold">活跃用户</div>
              <div className="text-sm text-gray-400">每日新增用户持续增长</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-black text-teal-400">1M+</div>
              <div className="text-lg text-gray-300 font-semibold">短信处理</div>
              <div className="text-sm text-gray-400">累计处理短信数量</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-black text-purple-400">99.9%</div>
              <div className="text-lg text-gray-300 font-semibold">成功率</div>
              <div className="text-sm text-gray-400">验证码接收成功率</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-black text-orange-400">所有</div>
              <div className="text-lg text-gray-300 font-semibold">支持平台</div>
              <div className="text-sm text-gray-400">覆盖全球主流应用</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">🚀 使用流程</h2>
            <p className="text-xl text-gray-600 font-semibold">通过API接口轻松完成验证码接收</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Key className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900">登录获取Token</h3>
              <p className="text-gray-600 text-lg">使用用户名密码登录，获取API调用凭证</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900">取卡获取号码</h3>
              <p className="text-gray-600 text-lg">调用取卡接口获取可用手机号码</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900">获取验证码</h3>
              <p className="text-gray-600 text-lg">轮询接口获取短信验证码内容</p>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-3xl font-black text-white">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Trash2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900">释放号码</h3>
              <p className="text-gray-600 text-lg">使用完成后释放号码</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-yellow-50 to-teal-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              🌟 为什么选择
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Nobody SMS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
              Nobody 9527 社区倾力打造，专业团队维护，为您提供最优质的接码服务体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-4 border-yellow-200 hover:border-yellow-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">⚡ 极速接收</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  平均 3 秒内接收验证码，最快 1 秒到达，告别漫长等待
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-4 border-teal-200 hover:border-teal-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🛡️ 隐私保护</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  AES-256 加密技术，自动清理历史记录，保护您的隐私安全
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">👥 社区支持</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  Nobody 9527 社区 5 万+ 用户，专业客服团队 24/7 在线服务
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-4 border-green-200 hover:border-green-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🌍 全球覆盖</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  支持 所有 平台，覆盖社交、电商、游戏等各个领域
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-4 border-blue-200 hover:border-blue-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🔧 API接口</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  提供完整的RESTful API，支持批量操作和自动化集成
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-4 border-red-200 hover:border-red-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-red-50 to-rose-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🏆 品质保证</CardTitle>
                <CardDescription className="text-lg text-gray-700 font-semibold">
                  99.9% 服务可用性，专业技术支持，让您使用无忧
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">📱 产品演示</h2>
            <p className="text-xl text-gray-600 font-semibold">看看我们的应用界面有多简洁易用</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900">🎯 简洁直观的界面设计</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  我们的应用界面经过精心设计，即使是第一次使用的用户也能快速上手。
                  清晰的布局、直观的操作流程，让接收验证码变得如此简单。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-gray-700">一键选择可用号码</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-gray-700">实时显示验证码</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-gray-700">历史记录管理</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-gray-700">余额充值提醒</span>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg"
                asChild
              >
                <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
                  <Download className="w-5 h-5 mr-3" />
                  立即下载
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-black text-gray-900">Nobody SMS</h4>
                    <Badge className="bg-green-100 text-green-800">在线</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-700">+86 138****8888</span>
                        <Badge className="bg-yellow-100 text-yellow-800">可用</Badge>
                      </div>
                    </div>

                    <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                      <div className="text-sm text-gray-600 mb-2">验证码已接收</div>
                      <div className="text-2xl font-black text-teal-600">123456</div>
                      <div className="text-xs text-gray-500 mt-1">来自: 微信</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                      <span className="text-gray-600">账户余额</span>
                      <span className="font-bold text-green-600">¥15.60</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="api" className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">🔧 API 接口文档</h2>
            <p className="text-xl text-gray-600 font-semibold">完整的RESTful API接口，支持所有核心功能</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gray-900">⚡ 接口总览</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                我们提供8个核心API接口，涵盖从用户认证到短信接收的完整流程。
                所有接口采用RESTful设计，支持GET请求，返回JSON格式数据。
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3">🌐 接口域名</h4>
                <div className="space-y-2 text-sm font-mono">
                  <p>
                    <span className="text-blue-600">主域名:</span> http://api.sqhyw.net:90
                  </p>
                  <p>
                    <span className="text-blue-600">备用域名:</span> http://api.nnanx.com:90
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-900 mb-3">⚠️ 重要提醒</h4>
                <div className="space-y-2 text-sm text-yellow-800">
                  <p>• 所有请求和返回数据采用UTF-8编码</p>
                  <p>• Token长期有效，密码不变则无需重新获取</p>
                  <p>• 注意取卡频率限制，避免IP被拉黑</p>
                  <p>• 释放号码需等待至少200秒</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">API 调用示例</span>
              </div>
              <div className="text-green-400 font-mono text-sm space-y-2">
                <div className="text-blue-400">// 1. 登录获取Token</div>
                <div>
                  <span className="text-purple-400">GET</span>
                  <span className="text-yellow-400"> /api/logins</span>
                </div>
                <div className="text-gray-400">?username=xxx&password=xxx</div>

                <div className="mt-4 text-blue-400">// 2. 取卡获取号码</div>
                <div>
                  <span className="text-purple-400">GET</span>
                  <span className="text-yellow-400"> /api/get_mobile</span>
                </div>
                <div className="text-gray-400">?token=xxx&project_id=xxx</div>

                <div className="mt-4 text-blue-400">// 3. 获取短信验证码</div>
                <div>
                  <span className="text-purple-400">GET</span>
                  <span className="text-yellow-400"> /api/get_message</span>
                </div>
                <div className="text-gray-400">?token=xxx&project_id=xxx&phone_num=xxx</div>
              </div>
            </div>
          </div>

          {/* API接口详细说明 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-4 border-green-200 hover:border-green-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">🔑 登录接口</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">获取API调用凭证</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/logins
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> username, password
                  </p>
                  <p>
                    <span className="font-bold">返回:</span> token, 余额, 用户信息
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-blue-200 hover:border-blue-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">💰 余额查询</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">查询账户余额信息</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/get_myinfo
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token
                  </p>
                  <p>
                    <span className="font-bold">返回:</span> 余额详情
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-yellow-200 hover:border-yellow-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">📱 取卡接口</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">获取可用手机号码</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/get_mobile
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token, project_id
                  </p>
                  <p>
                    <span className="font-bold">返回:</span> 手机号码
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">📨 获取短信</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">获取短信验证码</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/get_message
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token, project_id, phone_num
                  </p>
                  <p>
                    <span className="font-bold">返回:</span> 验证码内容
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-200 hover:border-red-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trash2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">🗑️ 释放号码</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">释放已使用号码</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/free_mobile
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token, phone_num
                  </p>
                  <p>
                    <span className="font-bold">说明:</span> 需等待200秒
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-gray-200 hover:border-gray-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Ban className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">🚫 拉黑号码</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">将号码加入黑名单</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/add_blacklist
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token, project_id, phone_num
                  </p>
                  <p>
                    <span className="font-bold">作用:</span> 屏蔽问题号码
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-teal-200 hover:border-teal-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">🔍 专属查询</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">查询专属项目信息</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/get_join
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token
                  </p>
                  <p>
                    <span className="font-bold">返回:</span> 专属项目列表
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-orange-200 hover:border-orange-400 transition-all duration-500 ease-out transform hover:scale-105 hover:-rotate-1 bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-gray-900">🔄 重新对接</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 font-semibold text-sm">重新对接专属项目</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>
                    <span className="font-bold">路径:</span> /api/sub_join
                  </p>
                  <p>
                    <span className="font-bold">参数:</span> token, key_
                  </p>
                  <p>
                    <span className="font-bold">场景:</span> 价格变更时使用
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">💬 用户评价</h2>
            <p className="text-xl text-gray-600 font-semibold">看看用户们怎么说</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-4 border-purple-200 bg-white shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">张</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">张同学</div>
                    <div className="text-sm text-gray-500">大学生</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  "作为学生党，经常需要注册各种平台，Nobody SMS 真的太方便了！
                  API接口简单易用，价格便宜，速度超快，强烈推荐！"
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-teal-200 bg-white shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">李</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">李经理</div>
                    <div className="text-sm text-gray-500">电商运营</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  "工作中经常需要测试各种应用的注册流程，Nobody SMS 帮了大忙！
                  支持的平台多，成功率高，API文档详细，集成很方便。"
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-yellow-200 bg-white shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">王</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">王开发</div>
                    <div className="text-sm text-gray-500">程序员</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  "开发测试时经常需要验证码，Nobody SMS 的 API 接口很稳定， 文档也很详细，大大提高了我们的开发效率！"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-10 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">💰 定价说明</h2>
            <p className="text-xl text-gray-600 font-semibold">简单透明，按需付费，无隐藏费用</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 新用户优惠 */}
            <Card className="border-4 border-red-400 shadow-2xl bg-gradient-to-br from-red-50 to-pink-50 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-bold animate-pulse">
                🎉 新用户专享
              </div>
              <CardHeader className="text-center bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-t-lg">
                <CardTitle className="text-3xl font-black">🔥 首充特惠</CardTitle>
                <div className="text-5xl font-black my-6">
                  充¥5
                  <span className="text-2xl font-bold opacity-90"> 得¥15</span>
                </div>
                <CardDescription className="text-lg font-bold text-white/90">
                  新用户首次充值享受 3.3 折超值优惠
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="text-sm text-gray-700 font-semibold">
                    ⚠️ 监管要求：平台不支持自行注册和充值
                    <br />
                    请先下载客户端，然后联系管理员进行账户开通和充值操作
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="bg-white/90 rounded-xl p-4 border-2 border-red-200">
                    <div className="text-3xl font-black text-red-600">3.3折</div>
                    <div className="text-sm text-gray-600">超值优惠</div>
                  </div>
                  <div className="text-lg font-bold text-gray-700">
                    💰 充值 ¥5 → 到账 ¥15
                    <br />📱 可接收 50 条验证码
                    <br />🎁 相当于每条仅需 ¥0.1
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "⚡ 秒级接收验证码",
                    "🌍 支持 所有 全球平台",
                    "🛡️ 军用级隐私保护",
                    "👥 24/7 专业技术支持",
                    "🔧 完整API接口支持",
                    "🔄 余额永不过期",
                    "📊 详细使用统计",
                    "🎯 新手专属指导",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-bold text-xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
                    <Download className="w-5 h-5 mr-3" />
                    立即下载客户端
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 标准套餐 */}
            <Card className="border-4 border-yellow-400 shadow-xl bg-gradient-to-br from-white to-yellow-50">
              <CardHeader className="text-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-t-lg">
                <CardTitle className="text-3xl font-black">🎯 按条计费</CardTitle>
                <div className="text-6xl font-black my-6">
                  ¥0.3
                  <span className="text-2xl font-bold opacity-80">/条</span>
                </div>
                <CardDescription className="text-lg font-bold text-black/80">每条短信验证码仅需 0.3 元</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                  <p className="text-sm text-gray-700 font-semibold">
                    ⚠️ 监管要求：平台不支持自行注册和充值
                    <br />
                    请联系管理员进行账户开通操作
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "⚡ 秒级接收验证码",
                    "🌍 支持 所有 全球平台",
                    "🛡️ 军用级隐私保护",
                    "👥 24/7 专业技术支持",
                    "🔧 完整API接口支持",
                    "🔄 自动充值功能",
                    "📊 详细使用统计",
                    "🎁 老用户专享折扣",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold text-xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
                    <Download className="w-5 h-5 mr-3" />
                    立即下载客户端
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">🔒 隐私政策</h2>
            <p className="text-xl text-gray-600 font-semibold">我们严格保护您的隐私和数据安全</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <Ban className="w-8 h-8 text-red-500 mr-3" />
                  免责声明与合规要求
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 用户行为责任：</strong>用户使用本平台账号进行的任何违法违规行为，包括但不限于：
                  恶意注册、欺诈行为、传播违法信息、侵犯他人权益等，均与本平台无关。
                  用户应对自己的行为承担全部法律责任。
                </p>
                <p>
                  <strong>2. 服务用途限制：</strong>本平台仅提供短信验证码接收技术服务，
                  用户应确保使用服务的目的合法合规。禁止将服务用于：垃圾信息发送、
                  恶意注册、网络诈骗、洗钱等违法犯罪活动。
                </p>
                <p>
                  <strong>3. 监管合规：</strong>本平台严格遵守相关法律法规，配合监管部门的合规要求。
                  如发现用户存在违法违规行为，平台有权立即停止服务并配合相关部门调查。
                </p>
                <p>
                  <strong>4. 平台免责：</strong>对于用户使用本服务过程中产生的任何法律纠纷、
                  经济损失或其他后果，本平台不承担任何责任。用户应自行承担使用风险。
                </p>
                <p>
                  <strong>5. 服务中断：</strong>因技术维护、政策调整、不可抗力等因素导致的服务中断，
                  本平台不承担赔偿责任。我们会尽力提前通知并尽快恢复服务。
                </p>
                <p>
                  <strong>6. 第三方风险：</strong>用户在第三方平台使用我们提供的手机号码时，
                  产生的任何问题（如账号被封、信息泄露等）与本平台无关，用户应自行承担风险。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
                  使用条款与限制
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 账户安全：</strong>用户有义务保护账户安全，不得将账户信息泄露给他人。
                  因账户信息泄露导致的损失，用户应自行承担责任。
                </p>
                <p>
                  <strong>2. 使用限制：</strong>禁止使用技术手段恶意刷取、批量注册或进行其他可能
                  影响平台正常运营的行为。违反者将被永久封禁账户。
                </p>
                <p>
                  <strong>3. 内容审查：</strong>平台有权对用户的使用行为进行监控和审查，
                  发现违规行为时有权采取限制、暂停或终止服务等措施。
                </p>
                <p>
                  <strong>4. 知识产权：</strong>本平台的所有技术、界面设计、商标等知识产权
                  均受法律保护，用户不得擅自使用、复制或传播。
                </p>
                <p>
                  <strong>5. 争议解决：</strong>因使用本服务产生的争议，应通过友好协商解决。
                  协商不成的，提交至平台所在地人民法院管辖。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <Shield className="w-8 h-8 text-blue-500 mr-3" />
                  数据收集与使用
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 收集的信息：</strong>我们仅收集提供服务所必需的信息，包括：用户名、密码（加密存储）、
                  账户余额信息、API调用记录（用于计费和技术支持）。
                </p>
                <p>
                  <strong>2. 使用目的：</strong>收集的信息仅用于：提供短信验证码接收服务、账户管理和计费、
                  技术支持和服务优化、遵守法律法规要求。
                </p>
                <p>
                  <strong>3. 不会收集：</strong>我们不会收集您的个人身份信息、通讯录、位置信息或其他与服务无关的数据。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <Database className="w-8 h-8 text-green-500 mr-3" />
                  数据存储与安全
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 数据加密：</strong>所有敏感数据采用AES-256加密技术存储，传输过程使用HTTPS协议保护。
                  用户密码经过不可逆加密处理，我们无法获取您的明文密码。
                </p>
                <p>
                  <strong>2. 数据清理：</strong>短信内容在接收后24小时内自动清理，不会长期保存。
                  API调用日志仅保留必要的计费信息，定期清理详细内容。
                </p>
                <p>
                  <strong>3. 访问控制：</strong>严格限制数据访问权限，仅授权技术人员在必要时可访问，
                  所有访问行为均有完整的审计记录。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <Users className="w-8 h-8 text-purple-500 mr-3" />
                  数据共享与披露
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 不会出售：</strong>我们承诺永远不会出售、出租或以其他方式向第三方提供您的个人信息。
                </p>
                <p>
                  <strong>2. 有限共享：</strong>仅在以下情况下可能共享信息：获得您的明确同意、
                  遵守法律法规要求、保护我们的合法权益、提供技术支持服务。
                </p>
                <p>
                  <strong>3. 合作伙伴：</strong>与可信的技术服务提供商合作时，会要求其遵守同等的隐私保护标准。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <Award className="w-8 h-8 text-orange-500 mr-3" />
                  用户权利与控制
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 访问权：</strong>您有权了解我们收集了哪些关于您的信息，可通过联系客服获取相关信息。
                </p>
                <p>
                  <strong>2. 更正权：</strong>如发现信息有误，您可以要求我们更正或更新相关信息。
                </p>
                <p>
                  <strong>3. 删除权：</strong>您可以要求删除账户和相关数据，我们会在法律允许的范围内执行删除操作。
                </p>
                <p>
                  <strong>4. 投诉权：</strong>如对我们的隐私保护措施有任何疑问或投诉，可通过官方渠道联系我们。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                  <RefreshCw className="w-8 h-8 text-teal-500 mr-3" />
                  政策更新
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. 更新通知：</strong>我们可能会不定期更新本隐私政策，重大变更会通过官方渠道提前通知用户。
                </p>
                <p>
                  <strong>2. 生效时间：</strong>本隐私政策自2024年1月1日起生效，最后更新时间：2024年1月15日。
                </p>
                <p>
                  <strong>3. 联系方式：</strong>如有任何隐私相关问题，请通过官方微信 NobodySMS 联系我们。
                </p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">📞 联系我们</h3>
              <p className="text-blue-800">如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：</p>
              <div className="mt-3 space-y-2 text-blue-700">
                <p>• 官方微信：NobodySMS</p>
                <p>• 社区：Nobody 9527</p>
                <p>• 服务时间：24/7 在线支持</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">❓ 常见问题</h2>
            <p className="text-xl text-gray-600 font-semibold">解答您的疑问</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-yellow-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">🤔 如何获取客户端和开通账户？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  请先下载客户端，然后联系管理员（官方微信：NobodySMS）进行账户开通和充值操作。
                  新用户首充享受3.3折优惠。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-teal-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">🔒 我的隐私信息安全吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  绝对安全！我们使用 AES-256 加密技术保护所有数据传输， 验证码接收后会在 24
                  小时内自动清理，不会保留任何敏感信息。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">🔧 如何使用API接口？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  我们提供8个核心API接口，包括登录、取卡、获取短信等功能。
                  所有接口采用RESTful设计，支持GET请求，详细文档请查看API部分。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-black text-gray-900">📱 支持哪些平台和应用？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">支持 所有 平台，覆盖社交、电商、游戏等各个领域。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-teal-50 to-blue-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">📞 联系我们</h2>
            <p className="text-xl text-gray-600 font-semibold">多种方式联系 Nobody 9527 社区，获得专业支持</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-4 border-yellow-200 hover:border-yellow-400 transition-all transform hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">💼 企业微信</CardTitle>
                <CardDescription className="text-2xl font-black text-yellow-600 my-4">点击加入企业微信</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700 font-semibold text-lg">加入官方企业微信群</p>
                <p className="text-gray-600">获取最新资讯和专业技术支持</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>⏰ 服务时间: 24/7 在线</p>
                  <p>⚡ 平均响应: 5 分钟内</p>
                  <p>🎯 账户开通和充值服务</p>
                  <p>📱 下载客户端后联系开通</p>
                </div>
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-8 py-3 rounded-full shadow-lg"
                  asChild
                >
                  <Link href="https://work.weixin.qq.com/ca/cawcde545684bd4afc" target="_blank">
                    立即加入
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-teal-200 hover:border-teal-400 transition-all transform hover:scale-105 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🛒 闲鱼官方店</CardTitle>
                <CardDescription className="text-2xl font-black text-teal-600 my-4">官方认证店铺</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700 font-semibold text-lg">访问闲鱼官方店铺</p>
                <p className="text-gray-600">了解更多产品信息和优惠活动</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>⭐ 店铺评分: 4.9/5.0</p>
                  <p>🛍️ 月销量: 1000+ 单</p>
                  <p>🎁 专属优惠活动</p>
                </div>
                <Button
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold px-8 py-3 rounded-full shadow-lg"
                  asChild
                >
                  <Link href="https://m.tb.cn/h.hd3s5xz?tk=AkWbVFhrfq5" target="_blank">
                    访问店铺
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Links Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-200 rounded-full opacity-10 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">🤝 合作伙伴 & 相关链接</h2>
            <p className="text-lg text-gray-600 font-semibold">感谢我们的合作伙伴和社区支持</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🏠 Nobody 官网</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600">nobody.xyz</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700 font-semibold">访问 Nobody 9527 社区官方网站</p>
                <p className="text-gray-600">了解更多社区动态和项目信息</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>🎯 社区成员: 50,000+</p>
                  <p>🚀 活跃项目: 20+</p>
                </div>
                <Button
                  className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-6 py-3 rounded-full shadow-lg"
                  asChild
                >
                  <Link href="https://nobody.xyz/" target="_blank">
                    访问官网
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black text-gray-900">🎮 赞助商</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600">Polkadot Game</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700 font-semibold">感谢 Polkadot Game 的赞助支持</p>
                <p className="text-gray-600">探索区块链游戏的无限可能</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>🎮 游戏类型: 区块链游戏</p>
                  <p>🏆 行业地位: 领先平台</p>
                </div>
                <Button
                  className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-6 py-3 rounded-full shadow-lg"
                  asChild
                >
                  <Link href="https://polkadotgame.net/" target="_blank">
                    访问赞助商
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-teal-400"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/nobody-logo.jpeg"
                  alt="Nobody 9527 Logo"
                  width={48}
                  height={48}
                  className="rounded-full shadow-lg border-2 border-yellow-400"
                />
                <div>
                  <span className="text-2xl font-black">Nobody SMS</span>
                  <div className="text-sm text-gray-400 font-semibold">9527 社区出品</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nobody 9527 社区倾力打造的专业接码平台，为全球用户提供安全可靠的短信验证服务。
              </p>
              <div className="text-yellow-400 font-bold text-lg">EVERY NOBODY IS SOMEBODY</div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-yellow-400">🔗 快速链接</h3>
              <div className="space-y-3">
                {[
                  { href: "#features", text: "功能特色" },
                  { href: "#demo", text: "产品演示" },
                  { href: "#api", text: "API文档" },
                  { href: "#pricing", text: "价格说明" },
                  { href: "#privacy", text: "隐私政策" },
                  { href: "#contact", text: "联系我们" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-yellow-400 transition-colors text-lg font-semibold cursor-pointer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-teal-400">📞 联系方式</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <span className="font-bold">社区编号:</span> Nobody 9527
                </p>
                <p className="text-lg">
                  <span className="font-bold">服务时间:</span> 24/7 在线支持
                </p>
                <p className="text-lg">
                  <span className="font-bold">定价:</span> ¥0.3/条短信
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-purple-400">📊 平台数据</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <span className="font-bold">活跃用户:</span> 50,000+
                </p>
                <p className="text-lg">
                  <span className="font-bold">处理短信:</span> 1,000,000+
                </p>
                <p className="text-lg">
                  <span className="font-bold">成功率:</span> 99.9%
                </p>
                <p className="text-lg">
                  <span className="font-bold">支持平台:</span> 所有
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-800 mt-12 pt-8 text-center space-y-4">
            <p className="text-gray-400 text-lg">
              &copy; 2024 Nobody SMS Platform. All rights reserved. | Nobody 9527 社区荣誉出品
            </p>
            <div className="flex justify-center space-x-2 text-2xl font-black">
              <span className="text-yellow-400">EVERY</span>
              <span className="text-orange-400">NOBODY</span>
              <span className="text-teal-400">IS</span>
              <span className="text-purple-400">SOMEBODY</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all animate-bounce"
          title="立即下载"
          asChild
        >
          <Link href="https://pan.baidu.com/s/1K4XDk2n11Kyd_CCia3BiHg?pwd=9527" target="_blank">
            <Download className="w-8 h-8" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
